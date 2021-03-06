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
import V from "../Variables";
import BackIcon from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: V.V.primaryColor
  },
  text: {
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    color: "white"
  },
  viewRow: {
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
export default class Div extends Component<Props> {
  static navigationOptions = {
    title: "Div",
    gesturesEnabled: true,
    headerBackImage: <BackIcon size={30} name="arrow-back" color="black" />
  };

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
