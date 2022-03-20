import React from 'react';
import NavigationBar from "./NavigationBar"
import Homepage from "./HomePage"
import QAScriptExecutor from "./QAScriptExecutor"
import Anniversary from "./Anniversary"


class App extends React.Component {
  componentDidMount() {
    document.title = "taotao today"
  }

  constructor(props) {
    super(props);
    this.state = {
      selected_item: "homepage"
    };
    this.handle_navigation_click = this.handle_navigation_click.bind(this);
  }

  handle_navigation_click(selected_item) {
    this.setState({
      selected_item: selected_item
    });
  }

  render() {
    let page;
    if (this.state.selected_item === "homepage") {
      page = <Homepage/>;
    } else if (this.state.selected_item === "qa_script") {
      page = <QAScriptExecutor/>;
    } else if (this.state.selected_item === "anniversary") {
      page = <Anniversary/>;
    } else {
      page = <p>error...</p>
    }

    return (
        <div className="App">
          <NavigationBar
            onItemSelect={this.handle_navigation_click}
          />
          {page}
        </div>
    );
  }
}

export default App;
