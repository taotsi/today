import React from "react";
import {Outlet} from "react-router-dom";
import {default as axios} from "axios";

export default class BackendTest extends React.Component {
  constructor(props) {
    super(props);
    let backend_host = "";
    if (process.env.NODE_ENV === "development") {
      backend_host = "http://localhost";
    } else if (process.env.NODE_ENV === "production") {
      backend_host = "https://taotao.today";
    }
    this.state = {
      backend_host: backend_host
    };
  }

  componentDidMount() {
    axios.get(this.state.backend_host + "/api/hello")
        .then(response => {
          this.setState({text: response.data});
        })
        .catch(error => console.log(error));
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