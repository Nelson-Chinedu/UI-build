import React from "react";
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";

import Icon from './Icon';

const TopNav = () => {
  return (
    <div className="c-topnav">
      <div className="c-topnav-left">
        <input placeholder="Search" />
        <i className="c-search-icon">
          <Icon iconName={faSearch} isColor={true} />
        </i>
      </div>
      <div className="c-topnav-right">
        <div className="c-topnav-notification">
          <Icon iconName={faBell} isColor={true} />
          <span className="badge" />
        </div>
        <img src="/avatar.jpg" alt="avatar" width="30px" height="30px" />
      </div>
    </div>
  );
};

export default TopNav;
