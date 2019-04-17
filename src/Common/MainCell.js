import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import V from "../Variables";

const styles = StyleSheet.create({
  container: {
    width: V.V.pgWidth - 30,
    height: 44,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  text: {
    fontSize: 20,
    color: "#333",
    textAlign: "center"
  }
});

type Props = {
  icon: String,
  title: String,
  onCellClick: () => void
};
export default class MainCell extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  handleCellClick = () => {
    const { onCellClick } = this.props;
    if (onCellClick) {
      onCellClick();
    }
  };

  render() {
    const { icon, title } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={this.handleCellClick}>
        {/* <Icon name={icon} size={20} color='#333' /> */}
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
  }
}
