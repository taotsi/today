import React from "react"
import {Outlet} from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import content_file from "./log.md"

// TODO: abstract a MarkDownPage, to merge this class and HomePage
export default class DevelopmentLog extends React.Component {
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