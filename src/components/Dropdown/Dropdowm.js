import React, { useState } from "react";
import { DropMenu } from "../DropMenu/DropMenu";

// const initialState = {
//   isVisible: false,
//   count: 0,
// };

// export class Dropdown extends React.Component {
//   state = { ...initialState };

//   increment = () => {
//     this.setState((prev) => {
//       return { count: prev.count + 1 };
//     });
//   };

//   reset = () => {
//     this.setState(initialState.count);
//   };

//   render() {
//     console.log(initialState);
//     console.log(this.state);
//     return (
//       <>
//         <h2>Dropdown</h2>
//         <h3>{this.state.count}</h3>
//         <button onClick={this.increment}>Increment</button>
//         <button onClick={this.reset}>Reset</button>
//       </>
//     );
//   }
// }

// export function DropDown() {
//   const [count, setCount] = useState(0);
//   const [isVisible, setVisible] = useState(false);

//   const increment = () => setCount((prev) => (prev += 1));
//   const reset = () => {
//     setCount(0);
//     setVisible(true);
//   };
//   return (
//     <>
//       <h3>{count}</h3>
//       <button onClick={increment}>Increment</button>
//       <button onClick={reset}>Reset</button>
//     </>
//   );
// }

// const initialState = {
//   isVisible: false,
//   count: 0,
// };

// export function DropDown() {
//   const [count, setCount] = useState(initialState);
//   // const [isVisible, setVisible] = useState(true);

//   const increment = () => setCount((prev) => (prev += 1));
//   const reset = () => {
//     setCount(0);
//     setVisible(false);
//   };
//   return (
//     <>
//       <h2>Dropdown</h2>
//       <h3>{count}</h3>
//       <button onClick={increment}>Increment</button>
//       <button onClick={reset}>Reset</button>
//     </>
//   );
// }

export function DropDown() {
  const [isVisible, setVisible] = useState(false);
  const [{ message, owner }, setMessage] = useState("");
  const toggleMenu = () => {
    setVisible((prev) => !prev);
  };

  const getMessage = (msg) => {
    setMessage(msg);
    setVisible(!isVisible);
  };
  return (
    <>
      {message && (
        <>
          <h2>{message}</h2>
          <h2>{owner}</h2>
        </>
      )}
      <button onClick={toggleMenu}>{isVisible ? `Hide` : `Show`} menu</button>
      {isVisible && <DropMenu getMessage={getMessage} />}
    </>
  );
}
