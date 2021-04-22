import React from "react";

import Icon from "./Icon";

const ListMessage = ({ brand, body, time, imagePath, iconName }) => {
  return (
    <div className="c-messages-container">
      <div className="c-messages-container-left">
        <img
          src={imagePath}
          width="25px"
          height="25px"
          alt="company logo"
        />
        <div className="c-messages-container-left-t">
          <p>{brand}</p>
          <p>{body}</p>
          <p>{time}</p>
        </div>
      </div>
      <div>
        <Icon
          iconName={iconName}
          iconColor="c-icon-color-gray"
          isColor={true}
        />
      </div>
    </div>
  );
};

export default ListMessage;
