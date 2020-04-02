// Library Imports
import React, { Component, Fragment } from "react";
import { TextInput, View, Text, useNavigation } from "react-native";
import SegmentedController from "../../components/segment_controller";
import Input from "../../components/input";
import Button from "../../components/button";
import Border from "../../components/border";
import Code from "../../components/qr-code";

// Relative Imports
import { Container, Label } from "./styles";

class Transfer extends Component {
  state = {
    values: ["Send", "Receive"],
    selectedIndex: 0,
    fromAmount: "",
    placeholder: "Enter text",
    value: "",
    fromAsset: "Select From Asset",
    toAsset: "Select To Asset",
    token: ""
  };

  changeTabs = selectedIndex => {
    this.setState({
      selectedIndex: selectedIndex
    });
  };

  changeInput = event => {
    this.setState({
      value: value
    });
  };

  selectToken = () => {
    navigation.navigate("Tokens", {
      itemId: 86,
      otherParam: "anything you want here"
    });
  };

  reviewTransaction = () => {
    this.props.navigation.navigate("Review");
  };

  chooseToken = () => {
    console.log("#####################");
    console.log("######### PRESS ###########");
  };

  render() {
    const {
      values,
      selectedIndex,
      value,
      text,
      amount,
      fromAsset,
      toAsset,
      fromAmount
    } = this.state;
    const navigation = useNavigation();

    return (
      <Container>
        <SegmentedController
          values={values}
          selectedIndex={selectedIndex}
          onPress={this.changeTabs}
        />
        {selectedIndex == 0 ? (
          <Fragment>
            <Border />
            <Input
              label="From Asset"
              type="cell"
              onPress={this.selectToken}
              chooseToken={this.chooseToken}
              value={fromAsset}
              placeholder="Select Asset"
              onChangeText={fromAsset => this.setState({ fromAsset })}
            />

            <Input
              label="Amount"
              type="input"
              placeholder="Enter Amount"
              value={fromAmount}
              onChange={this.changeInput}
              onChangeText={fromAmount => this.setState({ fromAmount })}
            />
            <Input
              label="Recipient"
              type="input"
              placeholder="Enter recipient"
              value={fromAmount}
              onChange={this.changeInput}
              onChangeText={fromAmount => this.setState({ fromAmount })}
            />

            <Input
              label="Payment ID (Opitional)"
              type="input"
              border="none"
              placeholder="Enter payment id"
              value={fromAmount}
              onChange={this.changeInput}
              onChangeText={fromAmount => this.setState({ fromAmount })}
            />

            <Button text="Review Transfer" onPress={this.reviewTransaction} />
          </Fragment>
        ) : (
          <Fragment>
            <Border />
            <Code />
            <Input
              label="Haven  Address"
              type="cell"
              border="none"
              onPress={this.selectToken}
              chooseToken={this.chooseToken}
              value={"hvxyAPCJe.....g51dzd7KV6G"}
              placeholder="Select Asset"
              onChangeText={fromAsset => this.setState({ fromAsset })}
            />
            <Button text="Copy Address" />
          </Fragment>
        )}
      </Container>
    );
  }
}

export default Transfer;
