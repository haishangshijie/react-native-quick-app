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
  ScrollView,
  TouchableOpacity
} from "react-native";
import DeviceInfo from "react-native-device-info";

const styles = StyleSheet.create({
  scroll: {
    flex: 1
  },
  container: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  info: {
    textAlign: "center",
    color: "#333333",
    padding: 10
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
export default class App extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      appInfo: ""
    };
  }

  showDeviceInfo = () => {
    const information = `
    应用名: ${DeviceInfo.getApplicationName()}\n
    应用build号: ${DeviceInfo.getBuildNumber()}\n
    应用包名: ${DeviceInfo.getBundleId()}\n
    应用安装时间: ${DeviceInfo.getFirstInstallTime()}\n
    应用ID: ${DeviceInfo.getInstanceID()}\n
    
    应用更新时间: ${DeviceInfo.getLastUpdateTime()}\n
    应用可读版本: ${DeviceInfo.getReadableVersion()}\n
    应用版本: ${DeviceInfo.getVersion()}\n
    `;
    this.setState({
      appInfo: information
    });
  };

  render() {
    const { appInfo } = this.state;
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Text style={styles.welcome}>应用信息:</Text>
          <TouchableOpacity style={styles.button} onPress={this.showDeviceInfo}>
            <Text style={styles.btnText}>点击获取</Text>
          </TouchableOpacity>
          <Text style={styles.info}>{appInfo}</Text>
        </View>
      </ScrollView>
    );
  }
}
