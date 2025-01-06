import React from 'react';

const YouTubeCard = ({ thumbnail, duration, title, views, publishDate, channelname, logo }) => {
  return (
    <div className="container">
      <div id="thumbnail">
        <img src={thumbnail} alt="Video Thumbnail" className="image" />
        <div id="duration">{duration}</div>
      </div>

      <div id="info">
        <div id="logo">
          <img src='logosf.jpg' alt="Channel Logo" id="imglogo" />
        </div>
        <div id="textinfo">
          <div id="title">{title}</div>
          <div id="name">{channelname}</div>
          <div id="ainfo">
            <div id="viewcount">{views}</div>
            <div id="age">{publishDate}</div>
          </div>
        </div>
      </div>
      <div id="sub">
        <p id="promo">While you are here you might as well visit!</p>
        <a href='https://www.youtube.com/@SpeakFootball' target='blank'>
           <button id="button1">
             Click here!
           </button>
        </a>
       </div>
    </div>
  );
};

export default YouTubeCard;
