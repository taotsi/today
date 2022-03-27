import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handle_item_click = this.handle_item_click.bind(this);
  }

  handle_item_click(_, {name}) {
    this.props.onItemSelect(name);
  }

  render() {
    return (
        <Menu>
          <Menu.Item
            name = "homepage"
            as={Link}
            to="/"
          >
            主页
          </Menu.Item>
          <Menu.Item
              name = "qa_script"
              as={Link}
              to="qa_robot"
          >
            问答机器人
          </Menu.Item>
          <Menu.Item
              name = "anniversary"
              as={Link}
              to="/anniversary"
          >
            纪念日
          </Menu.Item>
        </Menu>
    )
  }
}

// export default withRouter(NavigationBar);
