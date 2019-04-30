import React, { Component } from "react";
import {
  Text,
  View,
  Clipboard,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import QRCode from "react-native-qrcode";
import BackIcon from "react-native-vector-icons/MaterialIcons";
import V from "../Variables";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: V.V.primaryColor
  },
  input: {
    width: 200,
    height: 40,
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "white",
    marginTop: 50
    // marginBottom: 20
  },
  button: {
    width: 200,
    height: 44,
    marginTop: 30,
    borderRadius: 5,
    justifyContent: "center",
    backgroundColor: "green"
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    textAlign: "center"
  },
  text: {
    fontSize: 14,
    color: "#333",
    padding: 20
  }
});

type Props = {};
export default class Clipboards extends Component<Props> {
  static navigationOptions = {
    title: "剪贴板",
    gesturesEnabled: true,
    headerBackImage: <BackIcon size={30} name="arrow-back" color="black" />
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      copy: "",
      copyString: "",
      btnText: "复制",
      btnDisable: false
    };
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  handleTextChange = text => {
    this.setState({ copy: text });
  };

  handleCopyString = () => {
    const { copy } = this.state;
    console.log("clipboard ", copy);
    Clipboard.setString(copy);

    this.setState({
      btnText: "复制成功",
      btnDisable: true
    });
    this.timer = setTimeout(() => {
      this.setState({
        btnText: "复制",
        btnDisable: false
      });
    }, 2000);
  };

  handleVerifyString = () => {
    Clipboard.getString().then(result => {
      this.setState({ copyString: result });
    });
  };

  render() {
    const { copy, copyString, btnText, btnDisable } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="请输入要复制的内容"
          onChangeText={this.handleTextChange}
        >
          {copy}
        </TextInput>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: btnDisable ? "grey" : "green" }
          ]}
          disabled={btnDisable}
          onPress={this.handleCopyString}
        >
          <Text style={styles.buttonText}>{btnText}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleVerifyString}
        >
          <Text style={styles.buttonText}>粘贴</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{`剪贴板内容是: ${copyString}`}</Text>
      </View>
    );
  }
}
