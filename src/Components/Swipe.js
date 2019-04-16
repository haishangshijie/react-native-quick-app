import React, { Component } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  text: {
    width: 160,
    fontSize: 18,
    color: "#333",
    textAlign: "center"
  }
});

type Props = {};
export default class Swipe extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      arrow: ""
    };
  }

  handleSwipe = event => {
    console.log("event ", JSON.stringify(event));
  };

  render() {
    const { arrow } = this.state;
    return (
      <TouchableOpacity style={styles.container} onPress={this.handleSwipe}>
        <Text style={styles.text}>请在屏幕上滑动</Text>
        <Text style={styles.text}>{arrow}</Text>
      </TouchableOpacity>
    );
  }
}
