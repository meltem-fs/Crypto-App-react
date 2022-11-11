import React, { memo } from "react";
import Coin from "./Coin";

const Main = ({ data ,key}) => {
  console.log(data);
 return (
  <div>
    {data.map((data) => {
      return (
        <div className="main">
          
          <div className="symbol">
            <img src={data.image} alt="" />
            <h3>{data.name}</h3>
          </div>
          <p>{data.current_price}$ </p>
          <p
            className={data.price_change_percentage_24h >= 0 ? "green" : "red"}
          >
            {data.price_change_percentage_24h.toFixed(2)}%
          </p>
          <p>
            {data.market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          </p>
        </div>
      );
    })}
  </div>
 )
};

export default memo(Main);
