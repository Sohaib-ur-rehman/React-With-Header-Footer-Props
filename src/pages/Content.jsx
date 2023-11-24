import React, { Fragment } from "react";

const text1 = {
  margin: 10,
  color: "red"
};
export default (props) => (
  <Fragment>
    <div class="container1">
      <div className="image" style={{ order: props.order }}>
        <img src="https://i.pinimg.com/564x/48/bf/c9/48bfc9ae0a10418849a3f50d57c08897.jpg" />
      </div>
      <div className="text1" style={text1}>
        <h1>This is a beautiful garden.</h1>
      </div>
    </div>
  </Fragment>
);
