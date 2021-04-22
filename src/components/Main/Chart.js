import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

import data from "../data/index.json";

const Chart = () => {
  return (
    <div className="c-chart">
      <div className="c-chart-top">
        <div>
          <select>
            <option>Monthly</option>
          </select>
        </div>
        <div>
          <p>
            <span className="c-hart-top-right-done" /> Projects done
          </p>
          <p>
            <span className="c-hart-top-right-new" /> New applications
          </p>
        </div>
      </div>
      <ResponsiveContainer width={1000} height={400}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FDECE2" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FDECE2" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#EAEFFD" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#EAEFFD" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#FA5F1C"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#2979F2"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
