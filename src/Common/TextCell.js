import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
import V from "../Variables";

const styles = StyleSheet.create({
  container: {
    height: 50,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderBottomColor: "white",
    borderBottomWidth: 1
  },
  text: {
    fontSize: 18,
    color: "#333",
    textAlign: "center"
  }
});

type Props = {
  title: String,
  onCellClick: () => void
};
export default class TextCell extends Component<Props> {
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
    const { title } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={this.handleCellClick}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
  }
}
