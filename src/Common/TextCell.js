import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  text: {
    fontSize: 18,
    color: "#333",
    textAlign: "center"
  }
});

type Props = {
  title: String,
  onCellClick: () => {}
};
export default class TextCell extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  handleCellClick = () => {
    if (this.props.onCellClick) {
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
