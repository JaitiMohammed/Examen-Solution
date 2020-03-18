import ReactDOM from "react-dom";
import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
