/**
 * @module Landing
 * @class Slider
 *
 * React component slider
 */
import React from 'react';
import ES6_Promise from 'es6-promise';
const Promise = ES6_Promise.Promise;

export default React.createClass({

  displayName: 'Slider',

  propTypes: {
    className: React.PropTypes.string
  },

  getInitialState() {
    return ({
      currID: 0,
      nextID: 1,
      widthRatio: 0,
      changeInterval: 4000,
      animationTime: 500,
      animationSteps: 50,
      containerWidth: null,
      animateReverse: false,
      isAnimating: false
    });
  },

  componentDidMount() {
    this.setState({
      containerWidth: this.slidesContainer.offsetWidth
    });
    this.startMainTimer();
  },

  componentWillUnmount() {
    clearTimeout(this.mainTimer);
  },

  startMainTimer() {
    this.mainTimer = setTimeout(
      () => this.changeSlide(),
      this.state.changeInterval
    );
  },

  stopMainTimer() {
    clearTimeout(this.mainTimer);
  },

  changeSlide(reqID) {
    this.stopMainTimer();

    const stateUpdate = {
      widthRatio: 0,
      isAnimating: true
    };

    switch (reqID) {
      case 'prev':
      // Show previous slide
        stateUpdate.nextID = this.getPrevSlide(this.state.currID);
        stateUpdate.animateReverse = true;
        break;
      case 'next':
        // Show next slide
        break;
      case undefined:
        // Show next slide
        break;
      default:
        // Show requested slide
        // TODO Add capability to animate backward if prev slide is requested
        if (reqID < this.state.currID) {
          stateUpdate.animateReverse = true;
        }
        stateUpdate.nextID = reqID;
    }

    // Update slider state with selected options
    this.setState(stateUpdate);

    const animationPromise = new Promise( (resolve) => {
      this.animateSlidesChange(resolve);
    });

    animationPromise
      .then(
        complete => {
          this.setState({
            currID: this.state.nextID,
            nextID: this.getNextSlide(this.state.nextID),
            widthRatio: 0,
            animateReverse: false,
            isAnimating: false
          });
        }
      )
      .then(
        () => this.startMainTimer()
      );
  },

  animateSlidesChange(resolve) {
    // Change slides` containers width for sliding effect
    const moveSlides = () => {
      let widthRatio = this.state.widthRatio;
      widthRatio += 100 / this.state.animationSteps;
      this.setState({
        widthRatio: widthRatio
      });
    };

    // Invoke width changing function during animation interval
    const animationTimer = setInterval(
      () => moveSlides(),
      this.state.animationTime / this.state.animationSteps
    );

    // Resolve animation promise on animation end
    setTimeout(
      () => {
        clearInterval(animationTimer);
        resolve('complete');
      },
      this.state.animationTime
    );
  },

  getPrevSlide(reqID) {
    const lastID = this.props.slides.length - 1;
    return reqID > 0 ? reqID - 1 : lastID;
  },

  getNextSlide(reqID) {
    const lastID = this.props.slides.length - 1;
    return reqID < lastID ? reqID + 1 : 0;
  },

  handleButtonClick(reqID) {
    if (reqID === this.state.currID) return;
    if (this.state.isAnimating) return;
    this.changeSlide(reqID);
  },

  render() {
    const slides = this.props.slides;
    const widthRatio = this.state.widthRatio;
    const animateReverse = this.state.animateReverse;

    let firstSlideID, secondSlideID, firstWidth, secondWidth, xOffset;

    if (!animateReverse) {
      firstSlideID = 'currID';
      secondSlideID = 'nextID';
      firstWidth = 100 - widthRatio + '%';
      secondWidth = widthRatio + '%';
      xOffset = -this.state.containerWidth * widthRatio / 100 + 'px';
    }
    else {
      firstSlideID = 'nextID';
      secondSlideID = 'currID';
      firstWidth = widthRatio + '%';
      secondWidth = 100 - widthRatio + '%';
      xOffset = -this.state.containerWidth * (100 - widthRatio) / 100 + 'px';
    }

    const buttonNodes = slides.map( (slide, i) => {
      return (
        <button
          key={i}
          onClick={(e) => this.handleButtonClick(i)}
          >
          {i}
        </button>
      );
    });

    return (
      <div className={this.props.className}>

        <div
          ref={(slidesContainer) => this.slidesContainer = slidesContainer}
          style={{
            textAlign: 'center'
          }}
          >

          <div
            style={{
              overflow: 'hidden',
              width: firstWidth,
              float: 'left'
            }}
            >
            <img
              src={slides[this.state[firstSlideID]].path}
              style={{
                position: 'relative',
                left: xOffset
              }}
             />
          </div>

          <div
            style={{
              overflow: 'hidden',
              width: secondWidth
            }}
            >
            <img
              src={slides[this.state[secondSlideID]].path}
              />
          </div>

        </div>

        <div>
          <button
            onClick={(e) => this.handleButtonClick('prev')}
            >&lt;
          </button>
          {buttonNodes}
          <button
            onClick={(e) => this.handleButtonClick('next')}
            >&gt;
          </button>
        </div>
      </div>
    );
  }
});
