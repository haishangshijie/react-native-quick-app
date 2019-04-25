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
  Alert,
  Modal,
  ToastAndroid,
  TouchableOpacity
} from "react-native";
import DeviceInfo from "react-native-device-info";
import V from "../Variables";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
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
  modal: {
    // marginTop: (V.V.pgHeight - 44 * 5) / 2,
    // marginLeft: V.V.pgWidth * 0.1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(245, 245, 245, 0.2)"
  },
  modalView: {
    // marginTop: (V.V.pgHeight - 44 * 5) / 2,
    // marginLeft: V.V.pgWidth * 0.1,
    height: 44 * 5,
    justifyContent: "center",
    alignItems: "center",
    width: V.V.pgWidth * 0.8,
    backgroundColor: "rgba(245, 245, 245, 0.2)"
    // backgroundColor: "#ccc"
  },
  modalBtn: {
    width: V.V.pgWidth * 0.8,
    height: 44,
    justifyContent: "center",
    backgroundColor: "#F5FCFF"
  },
  modalText: {
    fontSize: 16,
    textAlign: "center",
    color: "black"
  }
});

type Props = {};
export default class AlertAndroid extends Component<Props> {
  static navigationOptions = {
    title: "弹窗",
    gesturesEnabled: true
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      isShow: false
    };
  }

  showToast = () => {
    ToastAndroid.show("这是一个toast", 1);
  };

  showAlertOne = () => {
    Alert.alert(
      "温馨提示",
      "Alert show for React Native",
      [{ text: "OK", onPress: () => console.log("show alert with one btn") }],
      { cancelable: false }
    );
  };

  showAlertTwo = () => {
    Alert.alert(
      "温馨提示",
      "Alert show for React Native",
      [
        {
          text: "Cancel",
          onPress: () => console.log("show alert with two btn  cancel")
        },
        {
          text: "OK",
          onPress: () => console.log("show alert with two btn  ok")
        }
      ],
      { cancelable: false }
    );
  };

  showAlertThree = () => {
    Alert.alert(
      "温馨提示",
      "Alert show for React Native",
      [
        {
          text: "Cancel",
          onPress: () => console.log("show alert with three btn  cancel")
        },
        {
          text: "Ask me later",
          onPress: () => console.log("show alert with three btn  later")
        },
        {
          text: "OK",
          onPress: () => console.log("show alert with three btn  ok")
        }
      ],
      { cancelable: false }
    );
  };

  showModal = () => {
    this.setState({ isShow: true });
  };

  dismissModal = text => () => {
    this.setState({ isShow: false });

    ToastAndroid.show(text, 1);
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.showToast}>
          <Text style={styles.btnText}>显示Toast</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.showAlertOne}>
          <Text style={styles.btnText}>显示对话框 1个按钮</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.showAlertTwo}>
          <Text style={styles.btnText}>显示对话框 2个按钮</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.showAlertThree}>
          <Text style={styles.btnText}>显示对话框 3个按钮</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.showModal}>
          <Text style={styles.btnText}>显示上下文菜单</Text>
        </TouchableOpacity>
        <Modal
          animationType="fade"
          transparent={true}
          transparentColor="#ccc"
          visible={this.state.isShow}
          onRequestClose={() => {
            console.log("Modal has been closed.");
          }}
        >
          <View style={styles.modal}>
            <View style={styles.modalView}>
              <TouchableOpacity
                activeOpacity={1}
                style={styles.modalBtn}
                onPress={this.dismissModal("发起群聊")}
              >
                <Text style={styles.modalText}>发起群聊</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                style={styles.modalBtn}
                onPress={this.dismissModal("添加朋友")}
              >
                <Text style={styles.modalText}>添加朋友</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                style={styles.modalBtn}
                onPress={this.dismissModal("扫一扫")}
              >
                <Text style={styles.modalText}>扫一扫</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                style={styles.modalBtn}
                onPress={this.dismissModal("收付款")}
              >
                <Text style={styles.modalText}>收付款</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={1}
                style={styles.modalBtn}
                onPress={this.dismissModal("帮助与反馈")}
              >
                <Text style={styles.modalText}>帮助与反馈</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
