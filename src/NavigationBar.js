import React from 'react'
import { Menu } from 'semantic-ui-react'

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
            onClick={this.handle_item_click}>
            主页
          </Menu.Item>
          <Menu.Item
              name = "qa_script"
              onClick={this.handle_item_click}>
            QA脚本测试
          </Menu.Item>
        </Menu>
    )
  }
}
