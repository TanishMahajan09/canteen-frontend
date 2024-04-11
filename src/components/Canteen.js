import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
const Canteen = (props) => {
  const navigate = useNavigate();
  const optionVal = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    console.log(`/canteen/${optionVal.current.value}`);
    navigate(`/canteen/${optionVal.current.value}`);
  }

  return (
    <div className="flex m-4 flex-col items-center">
      <select className=" border bg-blue-50 p-4 rounded-md" ref={optionVal}>
        {props.information.length === 0 ? (
          <h1>Loading .... </h1>
        ) : (
          props.information.map((ele) => {
            return (
              <option key={ele.id} value={ele.name}>
                {ele.name}
              </option>
            );
          })
        )}
      </select>
      <button
        onClick={handleSubmit}
        className="border border-blue-50 bg-blue-100 m-4 p-4 rounded-md"
      >
        Submit
      </button>
    </div>
  );
};

export default Canteen;
