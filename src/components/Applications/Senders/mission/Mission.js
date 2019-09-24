import React from 'react';
import FontAwesone from 'react-fontawesome';

const Mission = ({
  statement,
  statemetIcon,
  statementTitle,
}) => {
  
  return (
    <div className="mission-statement-item">
      <FontAwesone name={statemetIcon}/>
      <p className="mission-statement-item-title">{statementTitle}</p>
      <p className="mission-statement-item-mission">
        {statement}
      </p>
    </div>
  );
};

export default Mission;