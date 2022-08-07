import React from "react";

const Items = (props) => {
  return (
    <div id="currency-item">
      <p>
        {props.currency.symbol} {props.currency.name}
      </p>
      <p>{props.currency.rate}</p>
      <p>{(props.currency.rate * props.value).toFixed(2)}</p>
    </div>
  );
};

export default Items;
