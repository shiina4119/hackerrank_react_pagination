import React, { useState } from "react";
import Table from "./Table";

const Pagination = ({ data }) => {
  const [rows, setRows] = useState("5");
  const [pages, setPages] = useState(Math.ceil(data.length / parseInt(rows)));
  const [range, setRange] = useState([0, 14]);
  return (
    <>
      <div className="card flex justify-content-center align-items-center px-50 py-40 my-20 input-div">
        <form onSubmit={(e) => e.preventDefault()}>
          <select
            data-testid="selectInput"
            onChange={(e) => {
              setRows(e.target.value);
              setPages(Math.ceil(data.length / parseInt(e.target.value)));
              setRange([0, parseInt(e.target.value) - 1]);
            }}
            defaultValue={rows}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </form>

        <div className="button-div" data-testid="buttonDiv">
          {Array.from(Array(pages).keys()).map((a) => (
            <button
              key={a}
              onClick={() => {
                {
                  console.log(rows, pages, range, a);
                }
                setRange([
                  rows * a,
                  Math.min(data.length - 1, rows * (a + 1) - 1),
                ]);
              }}
            >
              {a + 1}
            </button>
          ))}
        </div>
      </div>

      <Table data={data} range={range} />
    </>
  );
};

export default Pagination;
