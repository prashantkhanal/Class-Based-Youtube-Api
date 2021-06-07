import React from 'react';

/**
 * @author
 * @function VideoList
 **/

const VideoList = (props) => {
  return (
    <div>
      <h1>{props.videos.length}</h1>
    </div>
  );
};

export default VideoList;
