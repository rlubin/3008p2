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
      bankingPassword: this.createPassword(),
      emailPassword: this.createPassword(),
      shoppingPassword: this.createPassword(),
      progress: [false, true, true, true, true, true],
      successTimes: [],
      failTimes: []
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

  log = () => {
    let sTimes = "[]";
    if (this.state.successTimes.length > 0) {
      sTimes = this.state.successTimes.join(".");
      sTimes = "[" + sTimes + "]";
    }
    let fTimes = "[]";
    if (this.state.failTimes.length > 0) {
      fTimes = this.state.failTimes.join(".");
      fTimes = "[" + fTimes + "]";
    }
    let data = {
      userid: this.state.userid,
      successTimes: sTimes,
      failTimes: fTimes
    };
    // console.log("sent:\nhttp://localhost:8080/log\n");
    console.log("data:\n", data);
    console.log(typeof data);
    //send post message with userid, sTimes, fTimes
    fetch("http://localhost:8080/log", {
      method: "POST",
      mode: "no-cors",
      body: data
    }).then(res => {
      console.log(res);
    });
  };

  updateSuccessTimes = time => {
    let newSuccessTimes = [...this.state.successTimes, time];
    this.setState({ successTimes: newSuccessTimes });
  };

  updateFailTimes = (time, last) => {
    let newFailTimes = [...this.state.failTimes, time];
    this.setState({ failTimes: newFailTimes });
  };

  render() {
    const done = this.checkDone();
    if (done === true) {
      this.log();
    }
    return (
      <React.Fragment>
        {done
          ? alert("You're done!\nThank you for participating in our project.")
          : ""}
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
                updateProgress={this.updateProgress}
              ></Create>
            </Grid.Column>
            <Grid.Column>
              <Create
                type={"Banking"}
                disabled={this.state.progress[3]}
                password={this.state.bankingPassword}
                updateProgress={this.updateProgress}
                updateSuccessTimes={this.updateSuccessTimes}
                updateFailTimes={this.updateFailTimes}
                last={false}
              ></Create>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Create
                type={"Email"}
                disabled={this.state.progress[1]}
                password={this.state.emailPassword}
                updateProgress={this.updateProgress}
              ></Create>
            </Grid.Column>
            <Grid.Column>
              <Create
                type={"Email"}
                disabled={this.state.progress[4]}
                password={this.state.emailPassword}
                updateProgress={this.updateProgress}
                updateSuccessTimes={this.updateSuccessTimes}
                updateFailTimes={this.updateFailTimes}
                last={false}
              ></Create>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Create
                type={"Shopping"}
                disabled={this.state.progress[2]}
                password={this.state.shoppingPassword}
                updateProgress={this.updateProgress}
              ></Create>
            </Grid.Column>
            <Grid.Column>
              <Create
                type={"Shopping"}
                disabled={this.state.progress[5]}
                password={this.state.shoppingPassword}
                updateProgress={this.updateProgress}
                updateSuccessTimes={this.updateSuccessTimes}
                updateFailTimes={this.updateFailTimes}
                last={true}
              ></Create>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
