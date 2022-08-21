import React, { useState, useEffect, useContext, useRef, useMemo } from "react";
import Layout from "./../layout";
import Cookies from "js-cookie";
import UserContext from "../context/UserContext";

function Counter() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 4]);
  const [show, setShow] = useState(true);
  const [currencies, setCurrencies] = useState([]);
  const data = useContext(UserContext);
  const inputRef = useRef();

  async function fetchAPI(path) {
    const res = await fetch(
      `https://webmaster-fake-api.herokuapp.com/currencies`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      }
    );
    const result = await res.json();
    setCurrencies(result);
  }

  useEffect(() => {
    // console.log("Mount/Update");
    fetchAPI();

    inputRef.current.style.height = "25px";
    inputRef.current.focus();

    //open ws connection to server
    // let time = 1;

    // const timer = setInterval(() => {
    //   time = time + 1;
    //   console.log("timer...", time);
    // }, 1000);

    // return () => {
    //   //close ws connection
    //   clearInterval(timer);
    //   console.log("Unmounting");
    // };
  }, []);

  useEffect(() => {
    //hit the api to fetch the user data : 1
    // console.log("calling second useeffect on count change");
  }, [count]);

  function displayMessage() {
    console.log("calling display message....");
    return <h1>Displaying message....</h1>;
  }
  return (
    <Layout>
      {show && (
        <>
          <h1 id="counter">Count: {count}</h1>
          <button id="increment" onClick={() => setCount(count + 1)}>
            +
          </button>
          <button id="decrement" onClick={() => setCount(count - 1)}>
            -
          </button>
        </>
      )}
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {/* <h1>Numbers</h1>
      {numbers.map((num) => (
        <p>{num}</p>
      ))} */}
      {currencies.map((currency, index) => (
        <p key={index}>{currency.name}</p>
      ))}
      <input ref={inputRef} type="text" name="test" />

      {useMemo(() => displayMessage(), [])}
    </Layout>
  );
}

// class Counter extends React.Component {
//   constructor() {
//     super();

//     this.state = { count: 0 };
//     this.handleIncrement = this.handleIncrement.bind(this);
//     this.handleDecrement = this.handleDecrement.bind(this);
//   }

//   static getDerivedStateFromProps() {
//     //lifecycle method
//     //make api call
//   }

//   handleIncrement() {
//     this.setState({
//       count: this.state.count + 1,
//     });
//     // console.log("this", this);
//   }

//   handleDecrement() {
//     this.setState({
//       count: this.state.count - 1,
//     });
//   }

//   render() {
//     return (
//       <Layout>
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={this.handleIncrement}>+</button>
//         <button onClick={this.handleDecrement}>-</button>
//       </Layout>
//     );
//   }

//   componentDidMount() {
//     //make api calls
//     //hitting api to fetch user id : 1
//     //open ws connection
//   }

//   componentDidUpdate() {
//     //hitting api to fetch user id: 2
//   }

//   componentWillUnmount() {
//     //close ws connection
//   }
// }

export default Counter;
