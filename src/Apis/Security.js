/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";
import DeviceInfo from "react-native-device-info";
import "jsencrypt";
import BackIcon from "react-native-vector-icons/MaterialIcons";
import V from "../Variables";

// 公钥
const PUB_KEY =
  "-----BEGIN PUBLIC KEY-----\n" +
  "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDLQZ6XzBsLRfgzAOeueNz+64M9\n" +
  "ralhL0tykrDzNtCYYPo+vV9/pALPYSrriCUtHgBG36zHJApZ6BsSWYO8P3HoliUL\n" +
  "tJZ1DJ97B//7aj0dHSQekXMRE0+7CUWr3ol6FR1V5lf1+Wdcy2IgSoJVHUFhEjtq\n" +
  "Lg3BzmwV7Mc2oWZHgwIDAQAB\n" +
  "-----END PUBLIC KEY-----\n";
// 私钥
const PRIV_KEY =
  "-----BEGIN RSA PRIVATE KEY-----\n" +
  "MIICXgIBAAKBgQDLQZ6XzBsLRfgzAOeueNz+64M9ralhL0tykrDzNtCYYPo+vV9/\n" +
  "pALPYSrriCUtHgBG36zHJApZ6BsSWYO8P3HoliULtJZ1DJ97B//7aj0dHSQekXMR\n" +
  "E0+7CUWr3ol6FR1V5lf1+Wdcy2IgSoJVHUFhEjtqLg3BzmwV7Mc2oWZHgwIDAQAB\n" +
  "AoGBAJzwpu8Yhw02UoW3PizGYAVpfeWi8LT8mqn1wDGbcocl4jONb26UCiNsKILC\n" +
  "lcn3b0lKLhN5rZBsGnMZsREqf90wWHW3kTbuF1d8tJmaJfuC2km3iXd4XAoMgsSR\n" +
  "QrHbH+WuiIQzAZviHnY52qXgMwnUN8y1pNrns2Ew3oyGriWhAkEA+ZfUSSMYG7ph\n" +
  "Io2UrOZdiM+4XJycG775Rz3hmWR50gbqBpiIjYAOdsgAK6zyyMyuDctTvCgeUm2Z\n" +
  "dQhDYpX4swJBANB5SzsICgXKz81V1jNU7cizi7rURC3V8QgJouFzZkrrjru7WJ8Q\n" +
  "6WKB6VHjtRxkgBEkkUUU5ucWHLruOr95vfECQQDYJrjdrdrPCJXeiqZbJhWSyfFr\n" +
  "ouU+0iCnpdueL/mf/gTmOWrowCHGlGYxbNHFPBzwLUoTBNtdnzTquYFB+4cpAkB3\n" +
  "OWb005wnw90jqTtfD+sNJOF8b3iuXfQCjMBB/yU5I431fycnkRxn4bP1ySwCmNdE\n" +
  "9oy93T5QWi0EGsouRwmBAkEAogAnYaUe3vK3X7gxrk7F0FGsHZLvR8Y1g8iOZq66\n" +
  "53+6QJVj6TFPOw9oS4chdgBnaZVtziJZZnHyjnobO70tUA==\n" +
  "-----END RSA PRIVATE KEY-----\n";

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: V.V.primaryColor
  },
  container: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  welcome: {
    fontSize: 14,
    // textAlign: "center",
    margin: 10
  },
  info: {
    textAlign: "center",
    color: "#333333",
    padding: 10
  },
  input: {
    width: 240,
    height: 80,
    fontSize: 14,
    color: "#333",
    borderRadius: 5,
    backgroundColor: "white",
    marginBottom: 20
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
  }
});

type Props = {};
export default class Security extends Component<Props> {
  static navigationOptions = {
    title: "安全算法",
    gesturesEnabled: true,
    headerBackImage: <BackIcon size={30} name="arrow-back" color="black" />
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      input: "",
      encrypted: "",
      decrypted: ""
    };
  }

  handleTextChange = text => {
    this.setState({ input: text });
  };

  handleEncrypt = () => {
    let encrypt = new JSEncrypt();
    encrypt.setPublicKey(PUB_KEY);
    let encrypted = encrypt.encrypt(this.state.input);
    this.setState({
      encrypted
    });
  };

  handleDecrypt = () => {
    let decrypt = new JSEncrypt();
    decrypt.setPrivateKey(PRIV_KEY);
    let decrypted = decrypt.decrypt(this.state.encrypted);
    this.setState({
      decrypted
    });
  };

  render() {
    const { input, encrypted, decrypted } = this.state;
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Text
            style={styles.welcome}
          >{`此演示使用的是RSA加密解密算法,同样的明文每次加密后密文会产生变化. 明文使用公钥加密,密文使用私钥解密`}</Text>
          <Text style={styles.welcome}>{`公钥: \n${PUB_KEY}`}</Text>
          <Text style={styles.welcome}>{`私钥: \n${PRIV_KEY}`}</Text>
          <TextInput style={styles.input} onChangeText={this.handleTextChange}>
            {input}
          </TextInput>
          <TouchableOpacity style={styles.button} onPress={this.handleEncrypt}>
            <Text style={styles.btnText}>加密</Text>
          </TouchableOpacity>
          <Text style={styles.info}>{`加密后的密文:\n${encrypted}`}</Text>
          <TouchableOpacity style={styles.button} onPress={this.handleDecrypt}>
            <Text style={styles.btnText}>解密</Text>
          </TouchableOpacity>
          <Text style={styles.info}>{`解密后的明文:\n${decrypted}`}</Text>
        </View>
      </ScrollView>
    );
  }
}
