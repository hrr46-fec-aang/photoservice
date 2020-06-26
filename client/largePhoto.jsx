import React from 'react';

class LargePhoto extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentphoto === undefined) {
      return null;
    } else {
      const { currentphoto } = this.props;
      const photo = currentphoto.photos[0];

      return (
        <div>
          <div>{photo.user.username}</div>
          <div>{currentphoto.location}</div>
          <div>{photo.thumbs}</div>
          <img src={photo.url}></img>
          <div>{photo.description}</div>
        </div>
      );
    }
  }
}

export default LargePhoto;
