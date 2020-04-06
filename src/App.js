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
      passwords:[["Banking",this.createPassword()],["Email",this.createPassword()],["Shopping",this.createPassword()]],
      order: this.shuffleOrder(),
      progress: [false, true, true, true, true, true],
      successTimes: [],
      failTimes: []
    };
  }



  createUserid = () => {
    return "fgu" + (Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000);
  };

  shuffleOrder = () => {
    let order = [0, 1, 2]
    for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
    }
    return order;
  };

  createPassword = () => {
    let password = "";
    let emoji = [
      "&#x1F600;",
      "&#x1F601;",
      "&#x1F912;",
      "&#x1F61B;",
      "&#x1F920;",
      "&#x1F9D0;",
      "&#x1F606;",
      "&#x1F607",
      "&#x1F608;",
      "&#x1F609;",
      "&#x1F60A;",
      "&#x1F92F;",
      "&#x1F913;",
      "&#x1F60D;",
      "&#x1F60E;",
      "&#x1F60F;",
      "&#x1F610;",
      "&#x1F631;",
      "&#x1F612;",
      "&#x1F613;",
      "&#x1F922;",
      "&#x1F615;",
      "&#x1F616;",
      "&#x1F911;",
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
    let data = {
      userid: this.state.userid,
      successTimes: this.state.successTimes,
      failTimes: this.state.failTimes
    };
    console.log("data:\n", data);
    fetch("http://localhost:8080/log", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(res => {
      console.log(res);
    });
  };

  updateSuccessTimes = time => {
    let newSuccessTimes = [...this.state.successTimes, time];
    this.setState({ successTimes: newSuccessTimes });
  };

  updateFailTimes = time => {
    let newFailTimes = [...this.state.failTimes, time];
    this.setState({ failTimes: newFailTimes });
  };

  render() {
    const done = this.checkDone();
    if (done === true) {
      this.log();
      alert("You're done!\nThank you for participating in our project.");
    }
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
                type={this.state.passwords[0][0]}
                disabled={this.state.progress[0]}
                password={this.state.passwords[0][1]}
                updateProgress={this.updateProgress}
              ></Create>
            </Grid.Column>
            <Grid.Column>
              <Test /////////////////////////////////////////TEST
                type={this.state.passwords[this.state.order[0]][0]}
                disabled={this.state.progress[3]}
                password={this.state.passwords[this.state.order[0]][1]}
                updateProgress={this.updateProgress}
                updateSuccessTimes={this.updateSuccessTimes}
                updateFailTimes={this.updateFailTimes}
              ></Test>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Create
                type={this.state.passwords[1][0]}
                disabled={this.state.progress[1]}
                password={this.state.passwords[1][1]}
                updateProgress={this.updateProgress}
              ></Create>
            </Grid.Column>
            <Grid.Column>
              <Test /////////////////////////////////////////TEST
                type={this.state.passwords[this.state.order[1]][0]}
                disabled={this.state.progress[4]}
                password={this.state.passwords[this.state.order[1]][1]}
                updateProgress={this.updateProgress}
                updateSuccessTimes={this.updateSuccessTimes}
                updateFailTimes={this.updateFailTimes}
              ></Test>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Create
                type={this.state.passwords[2][0]}
                disabled={this.state.progress[2]}
                password={this.state.passwords[2][1]}
                updateProgress={this.updateProgress}
              ></Create>
            </Grid.Column>
            <Grid.Column>
              <Test /////////////////////////////////////////TEST
                type={this.state.passwords[this.state.order[2]][0]}
                disabled={this.state.progress[5]}
                password={this.state.passwords[this.state.order[2]][1]}
                updateProgress={this.updateProgress}
                updateSuccessTimes={this.updateSuccessTimes}
                updateFailTimes={this.updateFailTimes}
              ></Test>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
