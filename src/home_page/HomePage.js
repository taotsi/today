import React from "react"
import {Outlet} from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import content_file from "./home.md"

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch(content_file)
        .then(response => response.text())
        .then(text => this.setState({ content: text }));
  }

  render() {

    return (
        <div>
          <ReactMarkdown>{this.state.content}</ReactMarkdown>
          <Outlet/>
        </div>
    );
  }
}