import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid
} from "react-native";
import QRCode from "react-native-qrcode";
import V from "../Variables";
import BackIcon from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
  text: {
    flex: 1,
    fontSize: 14,
    color: "#333",
    padding: 20
  }
});

type Props = {};
export default class Qrcode extends Component<Props> {
  static navigationOptions = {
    title: "二维码",
    gesturesEnabled: true,
    headerBackImage: <BackIcon size={30} name="arrow-back" color="black" />
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      qrcode: "",
      showQrcode: false
    };
  }

  handleTextChange = text => {
    this.setState({ qrcode: text });
  };

  handleShowQrcode = () => {
    this.setState({ showQrcode: true });
  };

  handleGoToScanQrcode = () => {
    ToastAndroid.show("无Camera!", 1);
  };

  render() {
    const { qrcode, showQrcode } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleGoToScanQrcode}
        >
          <Text style={styles.buttonText}>扫描二维码</Text>
        </TouchableOpacity>
        <TextInput style={styles.input} onChangeText={this.handleTextChange}>
          {qrcode}
        </TextInput>
        <TouchableOpacity style={styles.button} onPress={this.handleShowQrcode}>
          <Text style={styles.buttonText}>生成二维码</Text>
        </TouchableOpacity>
        {showQrcode ? (
          <QRCode value={qrcode} size={160} bgColor="black" fgColor="white" />
        ) : (
          false
        )}
      </View>
    );
  }
}
