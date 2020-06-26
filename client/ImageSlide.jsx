import React from 'react';

const ImageSlide = ({ photo }) => {
  const style = {
    display: 'flex',
    height: '800px',
    width: 'auto',
    alignItems: 'center',
  };
  return <img style={style} src={photo.url} />;
};

export default ImageSlide;
