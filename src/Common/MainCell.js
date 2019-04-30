import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import V from "../Variables";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    margin: 10,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1
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
      <TouchableOpacity onPress={this.handleCellClick}>
        <View style={styles.container}>
          {/* <Icon name={icon} size={20} color='#333' /> */}
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
