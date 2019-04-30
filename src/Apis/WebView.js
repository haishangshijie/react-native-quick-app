/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, WebView } from "react-native";
import BackIcon from "react-native-vector-icons/MaterialIcons";
import V from "../Variables";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: V.V.primaryColor
  }
});

type Props = {
  url: String
};
export default class WebViews extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title"),
      headerBackImage: <BackIcon size={30} name="arrow-back" color="black" />
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
