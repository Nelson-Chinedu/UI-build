import React from 'react';

import Chart from './Chart';
import Overview from './Overview';
import Report from './Report';
import TopNav from './TopNav';

const Main = () => {
  return (
    <div className="c-main">
      <TopNav />
      <Overview />
      <Chart />
      <Report />
    </div>
  )
};

export default Main;