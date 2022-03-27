import React from "react"
import { Outlet } from "react-router-dom";

export default class HomePage extends React.Component {
  render() {
    return (
        <div>
          <p>你好！请随便看看</p>
          <Outlet/>
        </div>
    );
  }
}