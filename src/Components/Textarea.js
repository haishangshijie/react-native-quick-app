import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import V from "../Variables";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#F5FCFF"
  },
  input: {
    width: V.V.pgWidthHalf - 20,
    margin: 20,
    fontSize: 16,
    color: "#333",
    borderRadius: 5,
    backgroundColor: "#ccc"
  },
  text: {
    fontSize: 18,
    color: "#333",
    padding: 20,
    width: V.V.pgWidthHalf - 20
  }
});

type Props = {};
export default class Textarea extends Component<Props> {
  static navigationOptions = {
    title: "Textarea",
    gesturesEnabled: true
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      textInput: ""
    };
  }

  handleChangeText = textInput => {
    this.setState({ textInput });
  };

  render() {
    const { textInput } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          multiline
          style={styles.input}
          placeholder="这是一个textarea,您可以输入一段文字,您输入的文字同时也会显示在下方"
          onChangeText={this.handleChangeText}
        />
        <Text
          style={styles.text}
          numberOfLines={0}
        >{`您输入的文字是:  ${textInput}`}</Text>
      </View>
    );
  }
}
