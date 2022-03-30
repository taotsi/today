import React from 'react';
import NavigationBar from "./common/NavigationBar"
import { Outlet } from "react-router-dom";


class App extends React.Component {
  componentDidMount() {
    document.title = "taotao today"
  }

  render() {
    return (
        <div className="App">
          <NavigationBar/>
          <Outlet />
        </div>
    );
  }
}

export default App;
