import React from 'react';
import styled from 'styled-components';

const ImageinBanner = styled.img`
  height: 100%;
  padding: 5px;
`;

class Photo extends React.Component {
  constructor(props) {
    super(props);
  }

  photoClickHandler() {
    this.props.clickHandler(this.props.photo._id);
  }
  render() {
    return (
      <ImageinBanner
        src={this.props.photo.url}
        onClick={this.photoClickHandler.bind(this)}
      ></ImageinBanner>
    );
  }
}

export default Photo;
