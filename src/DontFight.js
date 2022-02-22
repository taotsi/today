import React from 'react'
import dont_fight from './dont_fight.json'
import {Button, Segment, Grid} from 'semantic-ui-react';

class DontFight extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current_question: dont_fight.start };
  }

  render() {
    let answers = null;
    if ('a' in this.state.current_question) {
      answers = this.render_answers(this.state.current_question.a);
    }
    return (
        <div>
          <br/><br/><br/><br/><br/><br/><br/><br/>
          <Grid verticalAlign='middle' columns={3}>
            <Grid.Column/>
            <Grid.Column textAlign='center'>
              <Segment>
                <h2>{this.state.current_question.q}</h2><br/>
                {answers}
              </Segment>
            </Grid.Column>
            <Grid.Column/>
          </Grid>
        </div>
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
      q: "程序出错了..."
    }
  }
}

export default DontFight;
