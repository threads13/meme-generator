import React from 'react';

const Captions = (props) => {
  const { topLine, bottomLine } = props;
  return (
    <div className="captions">
      <p className="top-caption">{topLine}</p>
      <p className="bottom-caption">{bottomLine}</p>
    </div>
  );
}

export default Captions;
