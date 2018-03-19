import React from 'react';

const Image = (props) => {
  const { imageURL } = props;
  return (
    <div className="image">
      <img src={imageURL} />
    </div>
  );
}

export default Image;
