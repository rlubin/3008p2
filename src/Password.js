import React from "react";
import "./App.css";
import { Grid } from "semantic-ui-react";

class Password extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: this.props.password,
      modalOpen: false
    };
  }

  render() {
    return (
      <Grid columns={5} celled={true}>
        <Grid.Row>
          <Grid.Column>
            <p>&#x1F61C;</p>
          </Grid.Column>
          <Grid.Column>
            <p>&#x1F61C;</p>
          </Grid.Column>
          <Grid.Column>
            <p>&#x1F61C;</p>
          </Grid.Column>
          <Grid.Column>
            <p>&#x1F61C;</p>
          </Grid.Column>
          <Grid.Column>
            <p>&#x1F61C;</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Password;
