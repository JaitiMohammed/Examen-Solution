import React, { Component } from "react";

export default class footer extends Component {
  render() {
    return (
      <footer>
        <div class='ui inverted vertical footer fixed segment ' id='f'>
          <div class='ui center aligned container'>
            <div class='seven wide column'>
              <h4 class='ui inverted header'>
                DEVELOPED Y
                <a
                  style={{ color: "red" }}
                  href='https://www.facebook.com/groups/LLP.Learning/'
                >
                  {" "}
                  LET'S LEARN PROGRAMMING
                </a>
              </h4>
              <p>Copyright © - 2020</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
