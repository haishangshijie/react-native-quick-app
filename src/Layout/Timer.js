import React, { Component } from "react";
import { Text, View, Button, TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  inputView: {
    marginBottom: 50,
    flexDirection: "row",
    alignItems: "center"
  },
  input: {
    width: 120,
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "#ccc"
  },
  second: {
    color: "#333"
  }
});

type Props = {};
export default class Timer extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      second: 60,
      btnDisable: false
    };
  }

  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  }

  handleChangeText = text => {
    if (text.length > 0) {
      if (Number(text)) {
        this.setState({ second: Number(text) });
      }
    }
  };

  handleBtnClick = () => {
    this.setState({
      btnDisable: true
    });

    this.timer = setInterval(() => {
      if (this.state.second <= 0) {
        this.timer && clearInterval(this.timer);
        this.setState({
          second: 60,
          btnDisable: false
        });
        return;
      }
      this.setState({
        second: Number(this.state.second) - 1
      });
    }, 1000);
  };

  render() {
    const { second, btnDisable } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={this.handleChangeText}
          >
            {second.toString()}
          </TextInput>
          <Text style={styles.second}>{`  s`}</Text>
        </View>
        <Button
          title="开始计时"
          disabled={btnDisable}
          onPress={this.handleBtnClick}
        />
      </View>
    );
  }
}
