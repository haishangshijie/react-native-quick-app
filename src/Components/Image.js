import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { navigate } from "../Navigator";
import Icon from "react-native-vector-icons/Feather";

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
        <Icon
          style={{ marginBottom: 50 }}
          name="sunrise"
          size={80}
          color="red"
        />
        <Icon name="sunset" size={80} color="grey" />
      </View>
    );
  }
}
