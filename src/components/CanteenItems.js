import React from "react";

const CanteenItems = ({ item }) => {
  return (
    <div className="w-76 bg-gray-100">
      <h3 className="text-lg m-2">{item.toUpperCase()}</h3>
      <div className="text-lg m-2">Price:10</div>
      <div className="flex justify-evenly items-center">
        <button className="bg-black text-white rounded-lg m-1 py-1 px-2">
          Add
        </button>
        <span>Current:100000000000</span>
        <button className="bg-black text-white rounded-lg m-1 py-1 px-2">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CanteenItems;
