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
    className: React.PropTypes.string,
    slides: React.PropTypes.arrayOf( React.PropTypes.object ).isRequired
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
      isAnimating: false,
      leftButtons: null
    });
  },

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    this.updateDimensions();
    this.startMainTimer();
  },

  componentWillUnmount() {
    clearTimeout(this.mainTimer);
    window.removeEventListener('resize', this.updateDimensions);
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

  updateDimensions() {
    const sliderWidth = this.sliderContainer.offsetWidth;
    const buttonsWidth = this.buttonsContainer.offsetWidth;
    this.setState({
      containerWidth: sliderWidth,
      leftButtons: ( sliderWidth - buttonsWidth ) / 2
    });
  },

  render() {
    const slides = this.props.slides;
    const widthRatio = this.state.widthRatio;

    let firstSlideID, secondSlideID, leftFirst, leftSecond;

    if (!this.state.animateReverse) {
      firstSlideID = 'currID';
      secondSlideID = 'nextID';
      leftFirst = - widthRatio + '%';
      leftSecond = 100 - widthRatio + '%';
    }
    else {
      firstSlideID = 'nextID';
      secondSlideID = 'currID';
      leftFirst = - 100 + widthRatio + '%';
      leftSecond = widthRatio + '%';
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
      <div
        className={
          this.props.className + ' slide-viewer'
        }
        style={{
          height: this.state.containerWidth / 3
        }}
        ref={(sliderContainer) => this.sliderContainer = sliderContainer}
        >

        <div
          className='slides-group'
          >

          <div
            className='slide'
            style={{
              left: leftFirst
            }}
            >
            <img
              style={{
                width: '100%'
              }}
              src={slides[this.state[firstSlideID]].path}
             />
          </div>

          <div
            className='slide'
            style={{
              left: leftSecond
            }}
            >
            <img
              style={{
                width: '100%'
              }}
              src={slides[this.state[secondSlideID]].path}
              />
          </div>

        </div>

        <div
          className='slide-buttons'
          ref={(buttonsContainer) => this.buttonsContainer = buttonsContainer}
          style={{
            left: this.state.leftButtons
          }}
          >
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
