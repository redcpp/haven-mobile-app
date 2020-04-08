// Library Imports
import React, { Component, Fragment } from "react";

// Relative Imports
import { Container, Button, Label, Microcopy, Footer, Link } from "./styles";
import Next from "../../../components/next";
import InputText from "../../../components/input-text";
import { Information } from "../../../constants/type.js";
import Border from "../../../components/border/index.js";

class Security extends Component {
  state = {
    password: "",
    wallet: ""
  };
  routeUser = () => {
    this.props.navigation.navigate("Create");
  };
  render() {
    this.props.navigation.setOptions({
      title: "Create a Vault",
      headerBackTitleVisible: false,
      headerRight: () => (
        <Next onPress={() => this.props.navigation.navigate("Seed")} />
      )
    });
    return (
      <Fragment>
        <Border />
        <Container>
          <InputText
            label="Wallet Name"
            placeholder="Enter wallet name"
            value={this.state.wallet}
            onChangeText={wallet => this.setState({ wallet })}
          />
          <InputText
            label="Wallet Password"
            placeholder="Enter wallet password"
            value={this.state.login}
            onChangeText={password => this.setState({ password })}
          />
          <Microcopy>
            <Information>
              Creating a new wallet with a name and password makes it easier to
              login in the future because you don't have to enter your seed and
              your wallet details are ever sent to a server.
            </Information>
          </Microcopy>
        </Container>
        <Border />
      </Fragment>
    );
  }
}

export default Security;
