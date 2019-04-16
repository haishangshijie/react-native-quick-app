import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 44,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
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
  onCellClick: () => {}
};
export default class MainCell extends Component<Props> {
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
    const { icon, title } = this.props;
    console.log("title ", title);
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleCellClick}>
          {/* <Icon name={icon} size={20} color='#333' /> */}
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
