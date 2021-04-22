import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import Icon from "./Icon";

const Satisfaction = () => {
  return (
    <div className="c-satisfaction">
      <p className="c-satisfaction-caption">Customer Satisfaction</p>
      <p className="c-satisfaction-subCaption">Across help desk this month</p>
      <div className="c-satisfaction-response">
        <p>Response received</p>
        <p>390</p>
      </div>
      <div className="c-satisfaction-positive">
        <p>Positive</p>
        <div className="c-icons">
          <Icon
            iconName={faUser}
            isColor={true}
            iconColor="c-icon-color-green"
          />
          <Icon
            iconName={faUser}
            isColor={true}
            iconColor="c-icon-color-green"
          />
          <Icon
            iconName={faUser}
            isColor={true}
            iconColor="c-icon-color-green"
          />
          <Icon
            iconName={faUser}
            isColor={true}
            iconColor="c-icon-color-green"
          />
          <Icon
            iconName={faUser}
            isColor={true}
            iconColor="c-icon-color-green"
          />
          <Icon
            iconName={faUser}
            isColor={true}
            iconColor="c-icon-color-green"
          />
          <Icon
            iconName={faUser}
            isColor={true}
            iconColor="c-icon-color-white"
          />
          <Icon
            iconName={faUser}
            isColor={true}
            iconColor="c-icon-color-white"
          />
          <Icon
            iconName={faUser}
            isColor={true}
            iconColor="c-icon-color-white"
          />
          <Icon
            iconName={faUser}
            isColor={true}
            iconColor="c-icon-color-white"
          />
        </div>
        <p>60%</p>
      </div>
      <div className="c-satisfaction-neutral">
        <p>Neutral</p>
        <div className="c-icons">
          <Icon
            iconName={faUser}
            isColor={true}
            iconColor="c-icon-color-yellow"
          />
          <Icon
            iconName={faUser}
            isColor={true}
            iconColor="c-icon-color-yellow"
          />
          <Icon
            iconName={faUser}
            isColor={true}
            iconColor="c-icon-color-yellow"
          />
          <Icon
            iconName={faUser}
            isColor={true}
            iconColor="c-icon-color-white"
          />
          <Icon
            iconName={faUser}
            isColor={true}
            iconColor="c-icon-color-white"
          />
          <Icon
            iconName={faUser}
            isColor={true}
            iconColor="c-icon-color-white"
          />
          <Icon
            iconName={faUser}
            isColor={true}
            iconColor="c-icon-color-white"
          />
          <Icon
            iconName={faUser}
            isColor={true}
            iconColor="c-icon-color-white"
          />
          <Icon
            iconName={faUser}
            isColor={true}
            iconColor="c-icon-color-white"
          />
          <Icon
            iconName={faUser}
            isColor={true}
            iconColor="c-icon-color-white"
          />
        </div>
        <p>30%</p>
      </div>
      <div className="c-satisfaction-negative">
        <p>Negative</p>
        <div className="c-icons">
          <Icon iconName={faUser} isColor={true} iconColor="c-icon-color-red" />
          <Icon iconName={faUser} isColor={true} iconColor="c-icon-color-red" />
          <Icon
            iconName={faUser}
            isColor={true}
            iconColor="c-icon-color-white"
          />
          <Icon
            iconName={faUser}
            isColor={true}
            iconColor="c-icon-color-white"
          />
          <Icon
            iconName={faUser}
            isColor={true}
            iconColor="c-icon-color-white"
          />
          <Icon
            iconName={faUser}
            isColor={true}
            iconColor="c-icon-color-white"
          />
          <Icon
            iconName={faUser}
            isColor={true}
            iconColor="c-icon-color-white"
          />
          <Icon
            iconName={faUser}
            isColor={true}
            iconColor="c-icon-color-white"
          />
          <Icon
            iconName={faUser}
            isColor={true}
            iconColor="c-icon-color-white"
          />
          <Icon
            iconName={faUser}
            isColor={true}
            iconColor="c-icon-color-white"
          />
        </div>
        <p>20%</p>
      </div>
    </div>
  );
};

export default Satisfaction;
