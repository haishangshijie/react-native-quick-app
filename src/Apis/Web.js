/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 16,
    textAlign: "center",
    margin: 10,
    color: "white",
    width: 280,
    backgroundColor: "#ccc"
  },
  button: {
    width: 200,
    height: 44,
    margin: 15,
    backgroundColor: "green",
    justifyContent: "center"
  },
  btnText: {
    fontSize: 16,
    textAlign: "center",
    color: "white"
  },
  buttonGrey: {
    width: 200,
    height: 44,
    margin: 15,
    marginTop: 50,
    backgroundColor: "grey",
    justifyContent: "center"
  }
});

type Props = {};
export default class Web extends Component<Props> {
  static navigationOptions = {
    title: "网页网址"
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  openWebview = type => () => {
    //TODO: open url
    if (type === "url") {
      const { text } = this.state;
      const { navigation } = this.props;
      if (text.length === 0) {
        ToastAndroid.show("请输入网址!", 1);
        return;
      }
      const url = text.indexOf("http") === -1 ? `http://${text}` : text;
      const regex = new RegExp(
        "(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,9})+)(/(.)*)?(\\?(.)*)?",
        "igm"
      );
      if (!regex.test(url)) {
        ToastAndroid.show("网址错误,请检查后重试!", 1);
        return;
      }
      navigation.navigate("WebView", { url });
    } else if (type === "jd") {
      // jd
      const { navigation } = this.props;
      navigation.navigate("WebView", { url: "https://m.jd.com" });
    } else {
      // bd
      const { navigation } = this.props;
      navigation.navigate("WebView", { url: "https://m.baidu.com" });
    }
  };

  handleTextInputChange = text => {
    this.setState({ text });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.welcome}
          placeholder="请输入要打开的网址"
          onChangeText={this.handleTextInputChange}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.openWebview("url")}
        >
          <Text style={styles.btnText}>跳转</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonGrey}
          onPress={this.openWebview("jd")}
        >
          <Text style={styles.btnText}>跳转到 jd.com</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonGrey, { marginTop: 15 }]}
          onPress={this.openWebview("bd")}
        >
          <Text style={styles.btnText}>跳转到 baidu.com</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
