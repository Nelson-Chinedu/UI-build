import React from "react";

import Icon from './Icon';

const OverviewCard = ({
  backgroundColor,
  label,
  value,
  rate,
  day,
  iconName,
}) => {
  return (
    <div className={`${backgroundColor} c-overviewcard-container`}>
      <p>{label}</p>
      <div className="c-overviewcard">
        <p>{value}</p>
        <p>
          <Icon iconName={iconName} isColor={true} /> {rate}
        </p>
        <p>{day}</p>
      </div>
    </div>
  );
};

export default OverviewCard;
