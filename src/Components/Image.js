import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { navigate } from "../Navigator";
import Icon from "react-native-vector-icons/Feather";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

type Props = {};
export default class Image extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Icon name="sunrise" size={30} color="red" />
        <Icon name="sunset" size={30} color="grey" />
      </View>
    );
  }
}
