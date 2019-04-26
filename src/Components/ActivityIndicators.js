/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import V from "../Variables";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  text: {
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    color: "white"
  },
  viewRow: {
    // width: V.V.pgWidth,
    height: 30,
    marginBottom: 15,
    flexDirection: "row"
  },
  viewLine: {
    width: V.V.pgWidth,
    height: 60
  },
  bgGreen: {
    backgroundColor: "green"
  },
  bgBlue: {
    backgroundColor: "blue"
  }
});

type Props = {};
export default class ActivityIndicators extends Component<Props> {
  static navigationOptions = {
    title: "ActivityIndicator",
    gesturesEnabled: true
  };

  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="green" />
      </View>
    );
  }
}
