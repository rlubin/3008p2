import React from "react";
import "./App.css";
import { Grid, Header, Modal } from "semantic-ui-react";
import Create from "./Create";
import Test from "./Test";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: this.createUserid(),
      bankingPassword: this.createPassword(),
      emailPassword: this.createPassword(),
      shoppingPassword: this.createPassword(),
      progress: [false, true, true, true, true, true]
    };
  }

  createUserid = () => {
    return "fgu" + (Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000);
  };

  createPassword = () => {
    let password = "";
    let emoji = [
      "&#x1F600;",
      "&#x1F601;",
      "&#x1F602;",
      "&#x1F61B;",
      "&#x1F604;",
      "&#x1F605;",
      "&#x1F606;",
      "&#x1F607",
      "&#x1F608;",
      "&#x1F609;",
      "&#x1F60A;",
      "&#x1F60B;",
      "&#x1F60C;",
      "&#x1F60D;",
      "&#x1F60E;",
      "&#x1F60F;",
      "&#x1F610;",
      "&#x1F611;",
      "&#x1F612;",
      "&#x1F613;",
      "&#x1F614;",
      "&#x1F615;",
      "&#x1F616;",
      "&#x1F617;",
      "&#x1F618;"
    ];
    for (let i = 0; i < 5; i++) {
      password = password.concat(
        emoji[Math.floor(Math.random() * (emoji.length - 1))]
      );
    }
    return password;
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
    const done = this.checkDone();
    return (
      <React.Fragment>
        <Header as="h1">Fire Geckos</Header>
        <Header as="h1">Password Tester</Header>
        <Header as="h2">User: {this.state.userid}</Header>
        <Header as="h3">
          After completeing each step the next one will open up, closing access
          to the previous steps{" "}
        </Header>
        <Header as="h3">
          Refreshing or closing this page will force you to restart the whole
          process
        </Header>
        <Grid columns={2}>
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
        <Modal trigger={done === true}>
          <Modal.Header>You're done!</Modal.Header>
          <Modal.Content>
            <Modal.Description></Modal.Description>
          </Modal.Content>
        </Modal>
      </React.Fragment>
    );
  }
}

export default App;
