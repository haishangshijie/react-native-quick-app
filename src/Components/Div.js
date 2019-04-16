/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    color: "white"
  },
  viewRow: {
    height: 24,
    marginBottom: 15,
    flexDirection: "row"
  },
  viewLine: {
    height: 44
  },
  bgGreen: {
    backgroundColor: "green"
  },
  bgBlue: {
    backgroundColor: "blue"
  }
});

type Props = {};
export default class Div extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewRow}>
          <Text style={[styles.text, styles.bgGreen]}>direction-row1</Text>
          <Text style={[styles.text, styles.bgBlue]}>direction-row1</Text>
        </View>
        <View style={styles.viewLine}>
          <Text style={[styles.text, styles.bgGreen]}>direction-row1</Text>
          <Text style={[styles.text, styles.bgBlue]}>direction-row1</Text>
        </View>
      </View>
    );
  }
}
