import React from "react";
import parse from "html-react-parser";
import "./App.css";
import {
  Header,
  Button,
  Card,
  Modal,
  Grid,
  Message,
  Divider,
  Transition,
  Visibility
} from "semantic-ui-react";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: this.props.password,
      modalOpen: false,
      emojis: [
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
      ],
      testPassword: "",
      attempt: 1,
      incorrectPassword: false,
      pass: false,
      fail: false,
      startTime : "",
      endTime : ""
    };
  }

  handleOpen = () => {
    this.setState({ modalOpen: true });
    this.setState({startTime: Date.now()});
    console.log(Date.now())
    console.log(this.state.startTime)
    console.log(((Date.now() - this.state.startTime)/1000).toFixed(0))
  };

  handleClose = () => {
    this.setState({ attempt: this.state.attempt+1 });
    if (this.state.password === this.state.testPassword) {
      if (this.state.incorrectPassword === true)
        this.setState({ incorrectPassword: false });
      this.setState({ pass: true });
      this.updateSuccessTimes(((Date.now() - this.state.startTime)/1000).toFixed(0))
      this.setState({ modalOpen: false });
      this.props.update();
    } else if (this.state.password !== this.state.testPassword && this.state.attempt===3) {
      if (this.state.incorrectPassword === true)
        this.setState({ incorrectPassword: false });
      this.setState({ fail: true });
      this.updateFailTimes(((Date.now() - this.state.startTime)/1000).toFixed(0))
      this.setState({ modalOpen: false });
      this.props.updateProgress();
    } else {
      this.setState({ incorrectPassword: true });
      this.setState({ testPassword: "" });
      this.updateFailTimes(((Date.now() - this.state.startTime)/1000).toFixed(0))
      this.setState({startTime: Date.now()});
    }
  };

  inputPassword = input => {
    this.setState({ testPassword: this.state.testPassword.concat(input) });
  };

  updateSuccessTimes = num => {
    this.props.updateSuccessTimes(num);
  };

  updateFailTimes = num => {
    this.props.updateFailTimes(num);
  };

  render() {
    // console.log(this.state);
    return (
      <Card centered={true}>
        <Card.Content>
          <Card.Header>Enter password for {this.props.type}</Card.Header>
          <Modal
            open={this.state.modalOpen}
            trigger={
              <Button
                primary
                disabled={this.props.disabled}
                onClick={this.handleOpen}
              >
                Enter
              </Button>
            }
          >
            <Modal.Header>Enter password for {this.props.type}</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Header as="h4">
                  Clicking the "Done" button will close this popup and you won't
                  be able to access it again
                </Header>
              </Modal.Description>
              <Modal.Description>
                <Header as="h4">
                  You entered: <Header as="h1">{parse(this.state.testPassword)}</Header>
                </Header>
              </Modal.Description>
              <Divider hidden />
              <Grid>
                <Grid.Row>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[0])}
                    >
                      {parse(this.state.emojis[0])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[1])}
                    >
                      {parse(this.state.emojis[1])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[2])}
                    >
                      {parse(this.state.emojis[2])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[3])}
                    >
                      {parse(this.state.emojis[3])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[4])}
                    >
                      {parse(this.state.emojis[4])}
                    </Button>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[5])}
                    >
                      {parse(this.state.emojis[5])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[6])}
                    >
                      {parse(this.state.emojis[6])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[7])}
                    >
                      {parse(this.state.emojis[7])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[8])}
                    >
                      {parse(this.state.emojis[8])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[9])}
                    >
                      {parse(this.state.emojis[9])}
                    </Button>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[10])}
                    >
                      {parse(this.state.emojis[10])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[11])}
                    >
                      {parse(this.state.emojis[11])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[12])}
                    >
                      {parse(this.state.emojis[12])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[13])}
                    >
                      {parse(this.state.emojis[13])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[14])}
                    >
                      {parse(this.state.emojis[14])}
                    </Button>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[15])}
                    >
                      {parse(this.state.emojis[15])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[16])}
                    >
                      {parse(this.state.emojis[16])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[17])}
                    >
                      {parse(this.state.emojis[17])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[18])}
                    >
                      {parse(this.state.emojis[18])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[19])}
                    >
                      {parse(this.state.emojis[19])}
                    </Button>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[20])}
                    >
                      {parse(this.state.emojis[20])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[21])}
                    >
                      {parse(this.state.emojis[21])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[22])}
                    >
                      {parse(this.state.emojis[22])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[23])}
                    >
                      {parse(this.state.emojis[23])}
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      icon
                      size="massive"
                      onClick={() => this.inputPassword(this.state.emojis[24])}
                    >
                      {parse(this.state.emojis[24])}
                    </Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Modal.Actions>
                <Divider hidden />
                <Modal.Description>
                  <Header as="h4">
                    Clicking the "Done" button will close this popup and you
                    won't be able to access it again
                  </Header>
                </Modal.Description>
                <Button onClick={this.handleClose}>Done</Button>
                <Divider hidden />
                <Transition
                  visible={this.state.incorrectPassword}
                  animation="scale"
                  duration={500}
                >
                  <Message color="red">Incorrect Password</Message>
                </Transition>
              </Modal.Actions>
            </Modal.Content>
          </Modal>
            { this.state.fail ? <Message color='red'>Fail</Message> : null }
           { this.state.pass ? <Message color='green'>Pass</Message> : null}
        </Card.Content>
      </Card>
    );
  }
}

export default Test;
