import React from "react";

const TableData = ({ imgPath, brand, size, year, revenue, status }) => {
  const statusStyle = status.toLowerCase();

  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>
        <img src={imgPath} width="25px" height="25px" alt="logo" />
      </td>
      <td>{brand}</td>
      <td>{size}</td>
      <td>{year}</td>
      <td>{revenue}</td>
      <td>
        <span className={`c-table-${statusStyle}`}>
          <span className={`c-${statusStyle}-badge`} />
          {status}
        </span>
      </td>
    </tr>
  );
};

export default TableData;
