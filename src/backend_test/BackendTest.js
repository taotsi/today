import React from "react";
import {Outlet} from "react-router-dom";

export default class BackendTest extends React.Component {
  constructor(props) {
    super(props);

    let response_text = "";
    const axios = require('axios').default;
    axios.get('/hello')
        .then(function (response) {
          response_text = response;
          console.log(response);
        })
        .catch(error => console.log(error));
    this.state = {
      "text": response_text
    }
  }

  render() {
    return (
        <div>
          <div>{this.state.text}</div>
          <Outlet/>
        </div>
    );
  }
}