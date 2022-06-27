import React from "react";

const a: JSX.Element = (
  <div tabIndex={0}>
    <span>example</span>
    {1 + 1}
  </div>
);

const b: JSX.Element = <div tabIndex={0}>example</div>;
const c: JSX.Element = React.createElement("div", { tabIndex: 0 }, "example");

// const a = <string>b; error

const d = {};
const e = d as string;