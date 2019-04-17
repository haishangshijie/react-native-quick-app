import React, { Component } from "react";
import { Text, View, Switch, StyleSheet } from "react-native";
import V from "../Variables";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  sliderView: {
    flexDirection: "row"
  },
  text: {
    fontSize: 18,
    color: "#333",
    padding: 20,
    width: V.V.pgWidthHalf - 20
  }
});

type Props = {};
export default class SwitchInput extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value1: false,
      value2: true
    };
  }

  handleValue1Change = value => {
    this.setState({ value1: value });
  };

  handleValue2Change = value => {
    this.setState({ value2: value });
  };

  render() {
    const { value1, value2 } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.sliderView}>
          <Text style={styles.text}>Switch 关</Text>
          <Switch
            value={value1}
            onValueChange={this.handleValue1Change}
            trackColor={{ false: "grey", true: "green" }}
          />
        </View>
        <View style={styles.sliderView}>
          <Text style={styles.text}>Switch　开</Text>
          <Switch
            value={value2}
            onValueChange={this.handleValue2Change}
            trackColor={{ false: "grey", true: "green" }}
          />
        </View>
      </View>
    );
  }
}
