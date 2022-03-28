import React from "react";
import { Outlet } from "react-router-dom";

export default class BackendTest extends React.Component {
  render() {
    return (
        <div>
          <p>后端测试</p>
          <Outlet/>
        </div>
    );
  }
}