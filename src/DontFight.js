import React from 'react'
import dont_fight from './dont_fight.json'
import {Button, Segment, Grid} from 'semantic-ui-react';

class DontFight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_question: dont_fight.start
    };
  }

  render() {
    return (
        <div>
          <br/><br/><br/><br/><br/>
          <Grid verticalAlign='middle' columns={3}>
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
            <Button circular icon='refresh' floated="right" onClick={this.handle_refresh.bind(this)}></Button>
          </Grid.Column>
          <Grid.Column/>
        </Grid.Row>
    );
  }

  handle_refresh() {
    this.setState({
          current_question: dont_fight.start
        }
    );
  }

  render_question() {
    let answers = null;
    if ('a' in this.state.current_question) {
      answers = this.render_answers(this.state.current_question.a);
    }
    return (
        <Grid.Row>
          <Grid.Column/>
          <Grid.Column textAlign='center'>
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
                <Button onClick={this.handle_click.bind(this, answer.direct)}>
                  {answer.text}
                </Button>
                <br/><br/>
              </div>
          );
        }
    );
  }

  handle_click(direct) {
    console.log(direct);
    let new_question;
    if (direct in dont_fight) {
      new_question = dont_fight[direct];
    } else {
      new_question = this.errot_question();
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
