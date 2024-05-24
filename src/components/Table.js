import React from "react";

const Table = ({ data }) => {
  return (
    <div className="card">
      <table data-testid="table">
        <thead>
          <tr>
            <th>Country</th>
            <th>Capital</th>
          </tr>
        </thead>
        <tbody data-testid="tableBody">
          <tr>
            <td>India</td>
            <td>New Delhi</td>
          </tr>
          <tr>
            <td>Ukraine</td>
            <td>Kyiv</td>
          </tr>
          <tr>
            <td>Malaysia</td>
            <td>Kuala Lumpur</td>
          </tr>
          <tr>
            <td>Nijeria</td>
            <td>Abuja</td>
          </tr>
          <tr>
            <td>Malaysia</td>
            <td>Male</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
