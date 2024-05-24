import React from "react";
import Table from "./Table";

const Pagination = ({ data }) => {
  return (
    <>
      <div className="card flex justify-content-center align-items-center px-50 py-40 my-20 input-div">
        <form onSubmit={(e) => e.preventDefault()}>
          <select data-testid="selectInput">
            <option value="5">5</option>
          </select>
        </form>

        <div className="button-div" data-testid="buttonDiv">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </div>
      </div>

      <Table />
    </>
  );
};

export default Pagination;
