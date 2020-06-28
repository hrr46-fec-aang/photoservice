import React from 'react';
import Helpful from './Helpful.jsx';
import moment from 'moment';
const Info = ({ photo, index, length }) => {
  return (
    <div>
      <img src={photo.user.profile_pic_url}></img>
      <p>{photo.user.username}</p>
      <button
      // onClick={this.helpfulHandle.bind(this)}
      >{`Helpful ${photo.thumbs}`}</button>
      <p>{moment(photo.date).fromNow()}</p>
    </div>
  );
};

export default Info;
