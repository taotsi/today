import React from 'react';
import DontFight from "./DontFight";


class App extends React.Component {
  componentDidMount() {
    document.title = "taotao today"
  }
  render() {
    return (
        <div className="App">
          <DontFight/>
        </div>
    );
  }
}

export default App;
