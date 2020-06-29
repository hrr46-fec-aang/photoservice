import React from 'react';
import ImageSlide from './ImageSlide.jsx';
import Info from './info.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import {
  Main,
  Num,
  Header,
  CloseButton,
  LeftArrow,
  RightArrow,
  PhotoCarousel,
  Desc,
} from './styled.carousel.js';

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
    var previousIndex = Number(this.state.currentIndex) - 1;
    previousIndex =
      previousIndex < 0 ? photoCount + previousIndex : previousIndex;
    this.setState({
      currentIndex: previousIndex,
    });
  }

  next() {
    var photoCount = this.props.photos.length;
    var nextIndex = Number(this.state.currentIndex) + 1;
    nextIndex = nextIndex >= photoCount ? nextIndex - photoCount : nextIndex;
    this.setState({
      currentIndex: nextIndex,
    });
  }

  render() {
    const { currentIndex } = this.state;
    const { photos, location } = this.props;

    var length = photos.length;
    var index = Number(currentIndex) + 1;
    const photo =
      currentIndex === undefined
        ? photos[this.props.currentIndex]
        : photos[currentIndex];
    return (
      <Main>
        <Num>{`${index}/${length}`}</Num>
        <Header>
          <Info photo={photo} location={location} />
        </Header>
        <CloseButton>
          <FontAwesomeIcon icon={faTimes} onClick={this.props.handleClose} />
        </CloseButton>

        <LeftArrow>
          <FontAwesomeIcon
            icon={faAngleLeft}
            size="3x"
            color="#8e9490"
            onClick={this.previous.bind(this)}
          />
        </LeftArrow>
        <PhotoCarousel>
          <ImageSlide photo={photo} />
        </PhotoCarousel>
        <RightArrow>
          <FontAwesomeIcon
            icon={faAngleRight}
            size="3x"
            onClick={this.next.bind(this)}
          />
        </RightArrow>
        <Desc>{photo.description}</Desc>
      </Main>
    );
  }
}

export default Carousel;
