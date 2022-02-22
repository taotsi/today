import React from "react"
import dont_fight from "./dont_fight.json"
import {Button, Segment, Grid} from "semantic-ui-react";

class DontFight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_question: dont_fight.start,
      history: ["start"],
      go_back_disabled: true
    };
  }

  render() {
    return (
        <div>
          <br/><br/><br/><br/><br/>
          <Grid verticalAlign="middle" columns={3}>
            {this.render_buttons()}
            {this.render_question()}
          </Grid>
        </div>
    );
  }

  render_buttons() {
    return (
        <Grid.Row>
          <Grid.Column/>
          <Grid.Column>
            <Button circular icon="left chevron" floated="left" disabled={this.state.go_back_disabled} onClick={this.go_back.bind(this)}></Button>
            <Button circular icon="refresh" floated="right" onClick={this.handle_refresh.bind(this)}></Button>
          </Grid.Column>
          <Grid.Column/>
        </Grid.Row>
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

    if (history.length <= 1){
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
        <Grid.Row>
          <Grid.Column/>
          <Grid.Column textAlign="center">
            <Grid.Row>
              <Segment>
                <h2>{this.state.current_question.text}</h2><br/>
                {answers}
              </Segment>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
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

export default DontFight;
