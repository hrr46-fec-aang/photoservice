import React from 'react';
import { Image } from './styled.imageslide.js';
const ImageSlide = ({ photo }) => {
  return <Image src={photo.url}></Image>;
};

export default ImageSlide;
