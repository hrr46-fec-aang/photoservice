import styled from 'styled-components';

export const Main = styled.div`
  overflow: hidden;
  display: grid;
  position: fixed;
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  grid-template-rows: 120px auto 50px;
  grid-template-columns: 50px auto 50px;
  grid-template-areas:
    'num header close'
    'previous carousel next'
    '. description .';
`;

export const Num = styled.div`
  grid-area: num;
  color: #8e9490;
  padding-top: 10px;
  padding-left: 10px;
`;

export const Header = styled.div`
  grid-area: header;
  color: white;
`;

export const CloseButton = styled.div`
  grid-area: close;
  cursor: pointer;
  color: #8e9490;
  position: absolute;
  top: 10px;
  right: 10px;
  color: #f1f1f1;
  font-size: 25px;
  transition: 0.3s;
`;

export const LeftArrow = styled.div`
  cursor: pointer;
  grid-area: previous;
  color: #8e9490;
  align-self: center;
  justify-self: start;
  padding-left: 10px;
  &:hover {
    font-size: 120%;
  }
`;

export const RightArrow = styled.div`
  cursor: pointer;
  grid-area: next;
  color: #8e9490;
  align-self: center;
  justify-self: end;
  padding-right: 10px;
  &:hover {
    font-size: 120%;
  }
`;
export const PhotoCarousel = styled.div`
  grid-area: carousel;
  justify-self: center;
  align-self: center;
  height: 650px;
`;

export const Desc = styled.div`
  grid-area: description;
  color: white;
  justify-self: center;
  align-self: center;
  padding-top: 10px;
  padding-bottom: 30px;
`;
