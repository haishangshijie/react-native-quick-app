/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, WebView } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

type Props = {
  url: String
};
export default class App extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title")
    };
  };

  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  onLoadOver = ({ nativeEvent }) => {
    this.props.navigation.setParams({ title: nativeEvent.title });
  };

  render() {
    const { url } = this.props;
    return (
      <WebView
        style={styles.container}
        source={{ uri: url }}
        onLoadEnd={this.onLoadOver}
        bounces={false}
      />
    );
  }
}
