import React from "react";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

import OverviewCard from "./OverviewCard";

const Overview = () => {
  return (
    <div className="c-overview">
      <h3>Overview</h3>
      <div className="c-overview-container">
        <OverviewCard
          backgroundColor="c-overview-card-bg-peach"
          label="Registered companies"
          value="849"
          rate="5.25%"
          day="Since last week"
          iconName={faArrowUp}
        />
        <OverviewCard
          backgroundColor="c-overview-card-bg-blue"
          label="New application"
          value="508"
          rate="1.23%"
          day="Since last week"
          iconName={faArrowDown}
        />
        <OverviewCard
          backgroundColor="c-overview-card-bg-yellow"
          label="Total project done"
          value="1043"
          rate="1.23%"
          day="Since last week"
          iconName={faArrowDown}
        />
        <OverviewCard
          backgroundColor="c-overview-card-bg-cyan"
          label="New projects"
          value="38"
          rate="5.25%"
          day="Since last week"
          iconName={faArrowUp}
        />
      </div>
    </div>
  );
};

export default Overview;
