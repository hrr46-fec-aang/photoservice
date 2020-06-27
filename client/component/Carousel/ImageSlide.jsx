import React from 'react';

const ImageSlide = ({ photo }) => {
  const style = {
    display: 'flex',
    height: '800px',
    width: 'auto',
  };
  return <img style={style} src={photo.url} />;
};

export default ImageSlide;
