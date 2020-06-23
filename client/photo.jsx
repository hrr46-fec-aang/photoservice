import React from 'react';
import styled from 'styled-components';
const Image = styled.img`
  height: 100%;
  padding: 5px;
`;

const Photo = ({ photo }) => {
  return <Image src={photo.url}></Image>;
};

export default Photo;
