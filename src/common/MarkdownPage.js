import React from "react"
import {Outlet} from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import axios from "axios";

export default class MarkdownPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content_url: props.url
    };
  }

  componentDidMount() {
    axios.get(this.state.content_url)
        .then(response => this.setState({content: response.data}))
        .catch(function (error) {
          console.log(error);
        });
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