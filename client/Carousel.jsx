import React from 'react';
import ImageSlide from './ImageSlide.jsx';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: undefined,
    };
  }

  ComponentDidMount() {
    this.setState({
      currentIndex: this.props.currentIndex,
    });
  }

  render() {
    const { currentIndex } = this.state;
    const { photos } = this.props;
    if (this.props.isOpen) {
      return (
        // <Info />
        // <Arrow />
        <ImageSlide
          photo={
            currentIndex === undefined
              ? photos[this.props.currentIndex]
              : photos[currentIndex]
          }
        />
        // <Arrow />
      );
    } else {
      return null;
    }
  }
}

export default Carousel;
