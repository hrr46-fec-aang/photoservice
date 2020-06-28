import React from 'react';
import Helpful from './Helpful.jsx';
import moment from 'moment';
import {
  Header,
  LeftSection,
  RightSection,
  Avatar,
  Username,
  Time,
  Location,
  LikeButton,
} from './styled.info.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Info = ({ photo, location }) => {
  return (
    <Header>
      <LeftSection>
        <Avatar src={photo.user.profile_pic_url}></Avatar>
        <Username>{photo.user.username}</Username>
        <Time>{moment(photo.date).fromNow()}</Time>
        <Location>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          {` ${location}`}
        </Location>
      </LeftSection>
      <RightSection>
        <LikeButton
        // onClick={this.helpfulHandle.bind(this)}
        >
          <FontAwesomeIcon icon={faThumbsUp} />
          {` Helpful   ${photo.thumbs}`}
        </LikeButton>
      </RightSection>
    </Header>
  );
};

export default Info;
