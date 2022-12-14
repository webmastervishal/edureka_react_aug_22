import React from "react";
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import AppRouter from "./routes/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store";
import UserContext from "./context/UserContext";

// const root = ReactDOM.createRoot(document.getElementById("root"));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserContext.Provider value={{ name: "vishal", age: 30 }}>
        <AppRouter />
      </UserContext.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
