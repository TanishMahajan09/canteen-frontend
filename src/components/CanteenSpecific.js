import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CanteenItems from "./CanteenItems";

const CanteenSpecific = () => {
  const params = useParams();
  const [listItems, setListItems] = useState([]);
  useEffect(() => {
    // url  kisko hit karna hai
    axios
      .get(
        "http://localhost:8000/api/v1/general/canteenitems?canteenname=" +
          params.name
      )
      .then((response) => {
        setListItems(response.data.items);
      });
  }, []);
  return listItems.length === 0 ? (
    <>Loading ....</>
  ) : (
    <div>
      <div>Cart</div>
      <div className="flex flex-wrap justify-around m-2">
        {listItems.map((ele) => {
          return <CanteenItems item={ele} key={ele} />;
          // change key to id
        })}
      </div>
    </div>
  );
};

export default CanteenSpecific;
