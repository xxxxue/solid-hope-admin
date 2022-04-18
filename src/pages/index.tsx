import { Component } from "solid-js";

interface IProps {}
let index: Component<IProps> = function (props) {
  return (
    <>
      <p style={{ "font-size": "20px" }}>hello index</p>
      {[...new Array(50)].map(() => {
        return <p>content</p>;
      })}
    </>
  );
};

export default index;
