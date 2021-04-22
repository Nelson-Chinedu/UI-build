import React from "react";

import Messages from "./Messages";
import Satisfaction from "./Satisfaction";
import Table from "./Table";

const Report = () => {
  return (
    <div className="c-report">
      <Table />
      <div>
        <Satisfaction />
        <Messages />
      </div>
    </div>
  );
};

export default Report;
