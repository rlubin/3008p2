import React from "react";
import "./App.css";
import { Grid, Header } from "semantic-ui-react";
import Create from "./Create";
import Test from "./Test";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: this.createUserid(),
      bankingPassword: "",
      emailPassword: "",
      shoppingPassword: "",
      progress: [false, true, true, true, true, true]
    };
  }

  createUserid = () => {
    return "fgu" + (Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000);
  };

  createPassword = () => {
    return "password";
  };

  updateProgress = () => {
    let change;
    let array = this.state.progress;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === false) {
        array[i] = true;
        change = i + 1;
      }
      if (i === change) {
        array[i] = false;
      }
    }
    this.setState({ progress: array });
  };

  checkDone = () => {
    let done = [true, true, true, true, true, true];
    if (done.length !== this.state.progress.length) {
      return false;
    }
    for (var i = 0; i < done.length; i++) {
      if (done[i] !== this.state.progress[i]) {
        return false;
      }
    }
    return true;
  };

  render() {
    let done = this.checkDone();
    console.log(done);
    if (done === true) {
      console.log("thanks");
    }
    return (
      <React.Fragment>
        <Header as="h1">Fire Geckos</Header>
        <Header as="h1">Password Tester</Header>
        <Header as="h2">User: {this.state.userid}</Header>
        <Header as="h3">
          Refreshing or closing this page will force you to restart the whole
          process
        </Header>
        <Grid columns={2} celled={true}>
          <Grid.Row>
            <Grid.Column>
              <Create
                type={"Banking"}
                disabled={this.state.progress[0]}
                password={this.state.bankingPassword}
                update={this.updateProgress}
              ></Create>
            </Grid.Column>
            <Grid.Column>
              <Test
                type={"Banking"}
                disabled={this.state.progress[3]}
                password={this.state.bankingPassword}
                update={this.updateProgress}
              ></Test>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Create
                type={"Email"}
                disabled={this.state.progress[1]}
                password={this.state.emailPassword}
                update={this.updateProgress}
              ></Create>
            </Grid.Column>
            <Grid.Column>
              <Test
                type={"Email"}
                disabled={this.state.progress[4]}
                password={this.state.emailPassword}
                update={this.updateProgress}
              ></Test>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Create
                type={"Shopping"}
                disabled={this.state.progress[2]}
                password={this.state.shoppingPassword}
                update={this.updateProgress}
              ></Create>
            </Grid.Column>
            <Grid.Column>
              <Test
                type={"Shopping"}
                disabled={this.state.progress[5]}
                password={this.state.shoppingPassword}
                update={this.updateProgress}
              ></Test>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
