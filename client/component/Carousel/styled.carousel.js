import styled from 'styled-components';

export const Main = styled.div`
  display: grid;
  position: fixed;
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
  grid-template-row: 50px auto 50px;
  grid-template-column: 30px auto 30px;
  grid-template-areas:
    'num header close'
    'previous carousel next'
    '. description .';
`;

export const Num = styled.div`
  grid-area: num;
  color: white;
  padding-top: 10px;
  padding-left: 10px;
`;

export const Header = styled.div`
  grid-area: header;
  color: white;
`;

export const CloseButton = styled.div`
  grid-area: close;
  color: #8e9490;
  position: absolute;
  top: 10px;
  right: 10px;
  color: #f1f1f1;
  font-size: 25px;
  transition: 0.3s;
`;

export const LeftArrow = styled.div`
  grid-area: previous;
  color: #8e9490;
  align-self: center;
  justify-self: start;
  padding-left: 10px;
`;

export const RightArrow = styled.div`
  grid-area: next;
  color: #8e9490;
  align-self: center;
  justify-self: end;
  padding-right: 10px;
`;
export const PhotoCarousel = styled.div`
  grid-area: carousel;
`;

export const Desc = styled.div`
  grid-area: description;
  color: white;
  justify-self: center;
`;
