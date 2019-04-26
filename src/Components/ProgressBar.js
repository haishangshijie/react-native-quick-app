import React, { Component } from "react";
import {
  ProgressBarAndroid,
  AppRegistry,
  StyleSheet,
  View
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    padding: 10
  }
});

export default class ProgressBar extends Component {
  static navigationOptions = {
    title: "Progress",
    gesturesEnabled: true
  };

  render() {
    return (
      <View style={styles.container}>
        <ProgressBarAndroid />
        <ProgressBarAndroid styleAttr="Horizontal" />
        <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" />
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.5}
        />
      </View>
    );
  }
}
