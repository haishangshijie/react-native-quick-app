/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, Share, TouchableOpacity } from "react-native";
import DeviceInfo from "react-native-device-info";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  button: {
    width: 200,
    height: 44,
    margin: 15,
    backgroundColor: "green",
    justifyContent: "center"
  },
  btnText: {
    fontSize: 16,
    textAlign: "center",
    color: "white"
  }
});

type Props = {};
export default class ShareAndroid extends Component<Props> {
  static navigationOptions = {
    title: "分享",
    gesturesEnabled: true
  };

  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  handleShareClick = async () => {
    try {
      const result = await Share.share({
        message: "Test for React Native"
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.handleShareClick}>
          <Text style={styles.btnText}>点击分享</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
