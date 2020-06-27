import React from 'react';
import Helpful from './Helpful.jsx';
const Info = ({ photo, index, length }) => {
  // const helpfulHandle = () => {};
  return (
    <div>
      <img src={photo.user.profile_pic_url}></img>
      <p>{photo.user.username}</p>
      <button
      // onClick={this.helpfulHandle.bind(this)}
      >{`Helpful ${photo.thumbs}`}</button>
      <p>{photo.date}</p>
    </div>
  );
};

export default Info;
