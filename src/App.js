import React from 'react';
import {Link, Outlet} from "react-router-dom";
import {Menu} from "semantic-ui-react";


class App extends React.Component {
  componentDidMount() {
    document.title = "taotao today"
  }

  render() {
    return (
        <div>
          <Menu>
            <Menu.Item name="homepage" as={Link} to="/">
              主页
            </Menu.Item>
            <Menu.Item name="qa_script" as={Link} to="qa_robot">
              问答机器人
            </Menu.Item>
            <Menu.Item name="anniversary" as={Link} to="/anniversary">
              纪念日
            </Menu.Item>
            <Menu.Item name="backend_test" as={Link} to="/backend_test">
              后端测试
            </Menu.Item>
            <Menu.Item name="dev_log" as={Link} to="/dev_log">
              开发日志
            </Menu.Item>
          </Menu>
          <Outlet/>
        </div>
    )
  }
}

export default App;
