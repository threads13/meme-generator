import React from 'react';

const Captions = (props) => {
  const { topLineDisplay, bottomLineDisplay } = props;
  return (
    <div className="captions">
      <p className="top-caption">{topLineDisplay}</p>
      <p className="bottom-caption">{bottomLineDisplay}</p>
    </div>
  );
}

export default Captions;
