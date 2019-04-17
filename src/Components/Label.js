import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  text: {
    fontSize: 18,
    color: "#333",
    padding: 20,
    textAlign: "center"
  }
});

type Props = {};
export default class Label extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { textInput } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is a label with text</Text>
      </View>
    );
  }
}
