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
  ToastAndroid,
  TouchableOpacity
} from "react-native";
import DeviceInfo from "react-native-device-info";
import Modal from "react-native-modal";
import V from "../Variables";
import BackIcon from "react-native-vector-icons/MaterialIcons";

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
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalView: {
    height: 44 * 5,
    justifyContent: "center",
    alignItems: "center",
    width: V.V.pgWidth * 0.8
  },
  modalBtn: {
    width: V.V.pgWidth * 0.8,
    height: 44,
    justifyContent: "center",
    backgroundColor: V.V.primaryColor
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
    gesturesEnabled: true,
    headerBackImage: <BackIcon size={30} name="arrow-back" color="black" />
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
          isVisible={this.state.isShow}
          backdropColor="black"
          backdropOpacity={0.6}
          onBackButtonPress={() => {
            this.setState({ isShow: false });
          }}
          onBackdropPress={() => {
            this.setState({ isShow: false });
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
