import React from 'react';

const Image = (props) => {
  const { imageDisplay } = props;
  return (
    <div className="image">
      <img src={imageDisplay} />
    </div>
  );
}

export default Image;
