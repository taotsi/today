import React from "react"
import dont_fight from "./dont_fight.json"
import {Button, Segment, Grid} from "semantic-ui-react";
import { Outlet } from "react-router-dom";

export default class QAScriptExecutor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_question: dont_fight.start,
      history: ["start"],
      go_back_disabled: true
    };
    this.handle_refresh = this.handle_refresh.bind(this);
    this.go_back = this.go_back.bind(this);
  }

  render() {
    return (
        <div>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/>
          {this.render_question_row(this.render_question())}
          {this.render_operations_row(this.render_operations())}
          <Outlet/>
        </div>
    );
  }

  render_question_row(content) {
    return (
        <Grid>
          <Grid.Row columns={3} only='computer'>
            <Grid.Column></Grid.Column>
            <Grid.Column>
              {content}
            </Grid.Column>
            <Grid.Column></Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1} only='mobile'>
            <Grid.Column>
              {content}
            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }

  render_operations_row(content) {
    return (
        <Grid>
          <Grid.Row columns={3} only='computer'>
            <Grid.Column></Grid.Column>
            <Grid.Column>
              {content}
            </Grid.Column>
            <Grid.Column></Grid.Column>
          </Grid.Row>
          <Grid.Row only='mobile'>
            <Grid.Column width={15}>
              {content}
            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }

  render_operations() {
    return (
        <div>
          <Button circular icon="refresh" floated="right"
                  onClick={this.handle_refresh}>
          </Button>
          <Button circular icon="left chevron" floated="right"
                  disabled={this.state.go_back_disabled}
                  onClick={this.go_back}>
          </Button>
        </div>
    );
  }

  go_back() {
    let history = [...this.state.history];

    if (this.state.history.length > 1) {
      history.pop();
      this.setState({
        current_question: dont_fight[history[history.length - 1]],
        history: history
      });
    }

    if (history.length <= 1) {
      this.setState({
        go_back_disabled: true
      });
    }
  }

  handle_refresh() {
    this.setState({
      current_question: dont_fight.start,
      history: ["start"]
    });
  }

  render_question() {
    let answers = null;
    if ("a" in this.state.current_question) {
      answers = this.render_answers(this.state.current_question.a);
    }

    return (
        <Segment textAlign='center'>
          <h3>{this.state.current_question.text}</h3><br/>
          {answers}
        </Segment>
    );
  }

  render_answers(answers) {
    return answers.map(
        (answer) => {
          return (
              <div>
                <Button onClick={this.handle_choose.bind(this, answer.direct)}>
                  {answer.text}
                </Button>
                <br/><br/>
              </div>
          );
        }
    );
  }

  handle_choose(direct) {
    let new_question;
    if (direct in dont_fight) {
      new_question = dont_fight[direct];
      this.setState({
        history: [...this.state.history, direct],
        go_back_disabled: false
      });
    } else {
      new_question = this.errot_question();
      this.setState({
        history: [...this.state.history, "error"],
        go_back_disabled: false
      });
    }
    this.setState(
        {
          current_question: new_question
        }
    );
  }

  errot_question() {
    return {
      text: "程序出错了..."
    }
  }
}
