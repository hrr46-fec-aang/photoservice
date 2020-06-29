import styled from 'styled-components';

export const Header = styled.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
`;

export const LeftSection = styled.div`
  grid-column: 1;
  display: grid;
  grid-template-rows: 2fr 1fr 1fr;
  grid-template-columns: 4fr 1fr 6fr;
  grid-template-areas:
    '. avatar username'
    '. avatar time'
    '. location location';
`;

export const Avatar = styled.img`
  border-radius: 50%;
  height: 55px;
  width: 55px;
  grid-area: avatar;
  border-radius: 100%;
  justify-self: start;
  padding-top: 10px;
`;

export const Username = styled.div`
  font-size: 1.25rem;
  grid-area: username;
  padding-top: 15px;
  justify-self: start;
`;

export const Time = styled.div`
  font-size: 0.85rem;
  grid-area: time;
  align-self: start;
  padding-left: 5px;
  padding-top: 0px;
  color: gray;
`;

export const Location = styled.div`
  font-size: 0.85rem;
  grid-area: location;
  height: 100%;
  justify-self: left;
  padding-top: 5px;
`;

export const RightSection = styled.div`
  grid-column: 2;
  align-self: center;
`;

export const LikeButton = styled.button`
  cursor: pointer;
  width: 120px;
  padding: 12px 0;
  font-weight: 700;
  font-size: 1.1rem;
  text-align: center;
  border: 1px solid transparent;
  background-color: ${(props) => (props.isClicked === 1 ? 'gray' : '#40d9ac')};
  color: white;
  &:hover {
    opacity: 0.8;
  }
`;
