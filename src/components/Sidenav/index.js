import React from "react";
import {
  faHome,
  faUsers,
  faTags,
  faCommentDots,
  faSlidersH,
} from "@fortawesome/free-solid-svg-icons";

import Icon from "../Main/Icon";

const Sidenav = () => {
  return (
    <div className="c-sidenav">
      <ul>
        <li className="c-sidenav-active">
          <Icon
            iconName={faHome}
            iconColor="c-icon-color-blue"
            isColor={true}
          />{" "}
          Dashboard
        </li>
        <li>
          <Icon
            iconName={faUsers}
            iconColor="c-icon-color-black"
            isColor={true}
          />{" "}
          Companies
        </li>
        <li>
          <Icon
            iconName={faTags}
            iconColor="c-icon-color-black"
            isColor={true}
          />{" "}
          Projects
        </li>
        <li>
          <Icon
            iconName={faCommentDots}
            iconColor="c-icon-color-black"
            isColor={true}
          />{" "}
          Messages
        </li>
      </ul>
      <ul>
        <li>
          <Icon
            iconName={faSlidersH}
            iconColor="c-icon-color-black"
            isColor={true}
          />{" "}
          Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
