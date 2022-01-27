import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const name = 'taotao';

class Doc extends React.Component {
  componentDidMount() {
    document.title = name + "'s today"
  }

  render() {
    return (
        <div>
          <h1>
            I'm {name}, how are you today?
          </h1>
          <p>
            sorry that I'm not currently able to use chinese. but that's not my intention.
          </p>

          <p>
            hello again! now I've deployed this static site by nginx.
          </p>
        </div>
    )
  }
}

ReactDOM.render(
    <Doc/>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
