import React from 'react';
import ImageSlide from './ImageSlide.jsx';
import Info from './info.jsx';
import Description from './Description.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: undefined,
    };
  }

  componentDidMount() {
    this.setState({
      currentIndex: this.props.currentIndex,
    });
  }

  previous() {
    var photoCount = this.props.photos.length;
    var previousIndex = this.state.currentIndex - 1;
    previousIndex =
      previousIndex < 0 ? photoCount + previousIndex : previousIndex;
    this.setState({
      currentIndex: previousIndex,
    });
  }

  next() {
    var photoCount = this.props.photos.length;
    var nextIndex = this.state.currentIndex + 1;
    nextIndex = nextIndex >= photoCount ? nextIndex - photoCount : nextIndex;
    this.setState({
      currentIndex: nextIndex,
    });
  }

  render() {
    const { currentIndex } = this.state;
    const { photos } = this.props;
    var length = photos.length;
    var index = Number(currentIndex) + 1;
    const photo =
      currentIndex === undefined
        ? photos[this.props.currentIndex]
        : photos[currentIndex];

    return (
      <div>
        <div>{`${index}/${length}`}</div>
        <Info photo={photo} />
        <FontAwesomeIcon
          icon={faAngleLeft}
          size="4x"
          onClick={this.previous.bind(this)}
        />
        <ImageSlide photo={photo} />
        <FontAwesomeIcon
          icon={faAngleRight}
          size="4x"
          onClick={this.next.bind(this)}
        />
        <Description photo={photo} />
      </div>
    );
  }
}

export default Carousel;
