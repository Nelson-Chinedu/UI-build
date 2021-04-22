import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ iconName, isColor, iconColor }) => {
  return (
    <FontAwesomeIcon icon={iconName} className={`${isColor && iconColor}`} />
  );
};

Icon.propTypes = {
  iconName: PropTypes.object.isRequired,
  iconColor: PropTypes.string,
  isColor: PropTypes.bool.isRequired,
};

export default Icon;
