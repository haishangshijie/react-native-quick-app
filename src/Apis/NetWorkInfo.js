import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  NetInfo
} from "react-native";
import BackIcon from "react-native-vector-icons/MaterialIcons";
import V from "../Variables";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: V.V.primaryColor
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
export default class NetworkInfo extends Component<Props> {
  static navigationOptions = {
    title: "网络状态",
    gesturesEnabled: true,
    headerBackImage: <BackIcon size={30} name="arrow-back" color="black" />
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      netInfo: "",
      netInfoChange: ""
    };
  }

  componentWillUnmount() {
    NetInfo.removeEventListener(
      "connectionChange",
      this.handleConnectivityChange
    );
  }

  handleGetNetInfo = () => {
    NetInfo.getConnectionInfo().then(connectionInfo => {
      console.log(
        "Initial, type: " +
          connectionInfo.type +
          ", effectiveType: " +
          connectionInfo.effectiveType
      );
      this.setState({
        netInfo:
          connectionInfo.effectiveType === "unknown"
            ? connectionInfo.type
            : connectionInfo.effectiveType,
        netInfoChange:
          connectionInfo.effectiveType === "unknown"
            ? connectionInfo.type
            : connectionInfo.effectiveType
      });
    });
  };

  handleObserveNetInfo = () => {
    NetInfo.addEventListener("connectionChange", this.handleConnectivityChange);
  };

  handleConnectivityChange(connectionInfo) {
    console.log(
      "First change, type: " +
        connectionInfo.type +
        ", effectiveType: " +
        connectionInfo.effectiveType
    );
    this.setState({
      netInfoChange:
        connectionInfo.effectiveType === "unknown"
          ? connectionInfo.type
          : connectionInfo.effectiveType
    });
  }

  render() {
    const { netInfo, netInfoChange } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{`当前网络: ${netInfo}`}</Text>
        <TouchableOpacity style={styles.button} onPress={this.handleGetNetInfo}>
          <Text style={styles.buttonText}>获取网络状态</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{`当前网络: ${netInfoChange}`}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={this.handleObserveNetInfo}
        >
          <Text style={styles.buttonText}>监听网络状态</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
