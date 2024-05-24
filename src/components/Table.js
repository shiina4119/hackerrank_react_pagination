import React from "react";

const Table = ({ data, range }) => {
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
          {data.map((d, i) => {
            if (i >= range[0] && i <= range[1]) {
              return (
                <tr key={i}>
                  <td>{d.country}</td>
                  <td>{d.city}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
