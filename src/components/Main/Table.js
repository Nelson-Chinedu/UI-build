import React from "react";
import TableData from "./TableData";

const Table = () => {
  return (
    <div className="c-table">
      <div className="c-table-top-nav">
        <div className="c-table-top-nav-menu">
          <div className="c-table-top-nav-all">All</div>
          <div>
            <span className="c-table-top-nav-badge-green c-table-top-badge" />
            Approved
          </div>
          <div>
            <span className="c-table-top-nav-badge-yellow c-table-top-badge" />
            Pending
          </div>
          <div>
            <span className="c-table-top-nav-badge-red c-table-top-badge" />
            Declined
          </div>
        </div>
        <div>
          <select>
            <option>Sort</option>
          </select>
        </div>
      </div>
      <div className="c-table-wrapper">
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th></th>
              <th>Company Name</th>
              <th>Company Size</th>
              <th>Yrs of inc.</th>
              <th>Revenue</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <TableData
              imgPath="/cregital.jpg"
              brand="Cregital"
              size="102"
              year="3"
              revenue="NGN 1,000,000"
              status="Approved"
            />
            <TableData
              imgPath="/intelia.jpg"
              brand="Intelia"
              size="102"
              year="3"
              revenue="NGN 1,000,000"
              status="Approved"
            />
            <TableData
              imgPath="/atlassian.png"
              brand="Cregital"
              size="102"
              year="3"
              revenue="NGN 1,000,000"
              status="Pending"
            />
            <TableData
              imgPath="/enyata.jpg"
              brand="Cregital"
              size="102"
              year="3"
              revenue="NGN 1,000,000"
              status="Declined"
            />
            <TableData
              imgPath="/cloudnet.jpg"
              brand="Cregital"
              size="102"
              year="3"
              revenue="NGN 1,000,000"
              status="Declined"
            />
            <TableData
              imgPath="/cregital.jpg"
              brand="Cregital"
              size="102"
              year="3"
              revenue="NGN 1,000,000"
              status="Approved"
            />
          </tbody>
        </table>
      </div>
      <div className="c-table-paginate">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>...</div>
        <div>200</div>
      </div>
    </div>
  );
};

export default Table;
