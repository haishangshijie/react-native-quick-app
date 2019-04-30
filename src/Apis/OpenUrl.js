import React, { Component } from "react";
import {
  Text,
  View,
  Linking,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid
} from "react-native";
import QRCode from "react-native-qrcode";
import V from "../Variables";
import { navigate } from "../Navigator";
import BackIcon from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: V.V.primaryColor
  },
  container: {
    flex: 1,
    // marginVertical: 40,
    alignItems: "center"
  },
  row: {
    flexDirection: "row",
    marginVertical: 40
  },
  input: {
    width: 280,
    height: 40,
    fontSize: 16,
    color: "#333",
    borderRadius: 5,
    backgroundColor: "white",
    marginBottom: 10
  },
  inputArea: {
    width: 280,
    height: 80,
    fontSize: 16,
    color: "#333",
    borderRadius: 5,
    backgroundColor: "white"
  },
  button: {
    width: 280,
    height: 44,
    marginVertical: 30,
    borderRadius: 5,
    justifyContent: "center",
    backgroundColor: "green"
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    textAlign: "center"
  },
  inputRow: {
    width: 200,
    height: 40,
    fontSize: 16,
    color: "#333",
    borderRadius: 5,
    backgroundColor: "#ccc"
  },
  btnRow: {
    width: 80,
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    backgroundColor: "green"
  },
  text: {
    flex: 1,
    fontSize: 14,
    color: "#333",
    padding: 20
  }
});

type Props = {};
export default class OpenUrl extends Component<Props> {
  static navigationOptions = {
    title: "电话短信",
    gesturesEnabled: true,
    headerBackImage: <BackIcon size={30} name="arrow-back" color="black" />
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      tel: "10086",
      smsTel: "",
      smsMsg: "",
      email: "",
      emailMsg: "",
      webview: "https://www.baidu.com"
    };
  }

  handleTelChange = text => {
    this.setState({ tel: text });
  };

  handleSmsTelChange = text => {
    this.setState({ smsTel: text });
  };

  handleSmsMsgChange = text => {
    this.setState({ smsMsg: text });
  };

  handleEmailChange = text => {
    this.setState({ email: text });
  };

  handleEmailMsgChange = text => {
    this.setState({ emailMsg: text });
  };

  handleWebviewChange = text => {
    this.setState({ webview: text });
  };

  handleTelClick = () => {
    const { tel } = this.state;
    const url = `tel:${tel}`;
    this.handleOpenUrl(url);
  };

  handleSmsClick = () => {
    const { smsTel, smsMsg } = this.state;
    const url = `smsto:${smsTel}?body=${smsMsg}`;
    this.handleOpenUrl(url);
  };

  handleEmailClick = () => {
    const { email, emailMsg } = this.state;
    const url = `mailto:${email}?body=${emailMsg}`;
    this.handleOpenUrl(url);
  };

  handleWebClick = () => {
    const { webview } = this.state;
    navigate("WebView", { url: webview });
  };

  handleOpenUrl = url => {
    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          console.log("Can't handle url: " + url);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(err => console.error("An error occurred", err));
  };

  render() {
    const { tel, smsTel, smsMsg, email, emailMsg, webview } = this.state;
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.row}>
            <TextInput
              style={styles.inputRow}
              keyboardType="numeric"
              onChangeText={this.handleTelChange}
            >
              {tel}
            </TextInput>
            <TouchableOpacity
              style={styles.btnRow}
              onPress={this.handleTelClick}
            >
              <Text style={styles.buttonText}>拨打</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="请输入要发送的短信号码"
            onChangeText={this.handleSmsTelChange}
          >
            {smsTel}
          </TextInput>
          <TextInput
            multiline
            style={styles.inputArea}
            placeholder="请输入要发送的短信内容"
            onChangeText={this.handleSmsMsgChange}
          >
            {smsMsg}
          </TextInput>
          <TouchableOpacity style={styles.button} onPress={this.handleSmsClick}>
            <Text style={styles.buttonText}>发送短信</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder="请输入要发送的邮箱名"
            onChangeText={this.handleEmailChange}
          >
            {email}
          </TextInput>
          <TextInput
            multiline
            style={styles.inputArea}
            placeholder="请输入要发送的邮件内容"
            onChangeText={this.handleEmailMsgChange}
          >
            {emailMsg}
          </TextInput>
          <TouchableOpacity
            style={styles.button}
            onPress={this.handleEmailClick}
          >
            <Text style={styles.buttonText}>发送邮件</Text>
          </TouchableOpacity>
          <View style={styles.row}>
            <TextInput
              style={styles.inputRow}
              onChangeText={this.handleWebviewChange}
            >
              {webview}
            </TextInput>
            <TouchableOpacity
              style={styles.btnRow}
              onPress={this.handleWebClick}
            >
              <Text style={styles.buttonText}>打开</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
