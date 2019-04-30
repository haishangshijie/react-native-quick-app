import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { navigate } from "../Navigator";
import V from "../Variables";
import Icon from "react-native-vector-icons/Feather";
import BackIcon from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: V.V.primaryColor
  }
});

type Props = {};
export default class Image extends Component<Props> {
  static navigationOptions = {
    title: "Image",
    gesturesEnabled: true,
    headerBackImage: <BackIcon size={30} name="arrow-back" color="black" />
  };

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
