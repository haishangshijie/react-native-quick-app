/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
import DeviceInfo from "react-native-device-info";

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  container: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center"
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
export default class DeviceInfos extends Component<Props> {
  static navigationOptions = {
    title: "设备信息",
    gesturesEnabled: true
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      deviceInfo: "",
      batteryLevel: "",
      IPAddress: "",
      MACAddress: "",
      isAirPlaneMode: "",
      isBatteryCharging: "",
      isAutoTimeZone: "",
      isAutoDateAndTime: "",
      isPinOrFingerprintSet: ""
    };
  }

  getDevicesType = type => {
    switch (type) {
      case "Handset":
        return "手持电话";
      case "Tablet":
        return "异形屏（凹形屏）";
      case "Tv":
        return "电视";
      default:
        return "未知设备";
    }
  };

  showDeviceInfo = () => {
    // android.permission.READ_PHONE_STATE
    // android.permission.ACCESS_WIFI_STATE
    // android.permission.BLUETOOTH

    const information = `
    国家:  ${DeviceInfo.getDeviceCountry()}\n
    语言:  ${DeviceInfo.getDeviceLocale()}\n
    语言列表:  ${DeviceInfo.getPreferredLocales()}\n
    运营商:  ${DeviceInfo.getCarrier()}\n
    设备品牌:   ${DeviceInfo.getBrand()}\n
    设备制造商:   ${DeviceInfo.getManufacturer()}\n
    设备ID:   ${DeviceInfo.getDeviceId()}\n
    设备名:   ${DeviceInfo.getDeviceName()}\n
    设备Model名:  ${DeviceInfo.getModel()}\n    
    设备标识符:  ${DeviceInfo.getUniqueID()}\n
    可用存储大小:  ${DeviceInfo.getFreeDiskStorage()} bytes\n
    设备总存储:   ${DeviceInfo.getTotalDiskCapacity()} bytes\n
    总内存:   ${DeviceInfo.getTotalMemory()} bytes\n
    最大内存:   ${DeviceInfo.getMaxMemory()} bytes\n
    手机号:   ${DeviceInfo.getPhoneNumber()}\n
    设备串号:   ${DeviceInfo.getSerialNumber()}\n
    系统:   ${DeviceInfo.getSystemName()}\n
    系统版本:   ${DeviceInfo.getSystemVersion()}\n
    字体缩放级别:  ${DeviceInfo.getFontScale()}\n
    支持处理器列表:   ${DeviceInfo.supportedABIs()}\n
    时区:   ${DeviceInfo.getTimezone()}\n
    Uesr Agent:  ${DeviceInfo.getUserAgent()}\n
    是否是24小时制:  ${DeviceInfo.is24Hour() ? "是" : "否"}\n
    是否是模拟器:  ${DeviceInfo.isEmulator() ? "是" : "否"}\n
    是否是平板:  ${DeviceInfo.isTablet() ? "是" : "否"}\n
    是否是异形屏(凹形屏):  ${DeviceInfo.hasNotch() ? "是" : "否"}\n
    是否是横屏模式:  ${DeviceInfo.isLandscape() ? "是" : "否"}\n
    设备类型:  ${this.getDevicesType(DeviceInfo.getDeviceType())}\n
    API Level:   ${DeviceInfo.getAPILevel()}\n
    `;
    this.setState({
      deviceInfo: information
    });

    DeviceInfo.getBatteryLevel().then(level => {
      this.setState({ batteryLevel: level });
    });
    DeviceInfo.getIPAddress().then(address => {
      this.setState({ IPAddress: address });
    });
    DeviceInfo.getMACAddress().then(address => {
      this.setState({ MACAddress: address });
    });
    DeviceInfo.isAirPlaneMode().then(airPlaneModeOn => {
      this.setState({ isAirPlaneMode: airPlaneModeOn ? "是" : "否" });
    });
    DeviceInfo.isBatteryCharging().then(charging => {
      this.setState({ isBatteryCharging: charging ? "是" : "否" });
    });
    DeviceInfo.isPinOrFingerprintSet()(isSet => {
      this.setState({ isPinOrFingerprintSet: isSet ? "是" : "否" });
    });
    DeviceInfo.isAutoDateAndTime().then(isAuto => {
      this.setState({ isAutoDateAndTime: isAuto ? "是" : "否" });
    });
    DeviceInfo.isAutoTimeZone().then(isAuto => {
      this.setState({ isAutoTimeZone: isAuto ? "是" : "否" });
    });
  };

  render() {
    const {
      deviceInfo,
      batteryLevel,
      IPAddress,
      MACAddress,
      isAirPlaneMode,
      isBatteryCharging,
      isPinOrFingerprintSet,
      isAutoDateAndTime,
      isAutoTimeZone
    } = this.state;
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <Text style={styles.welcome}>设备信息:</Text>
          <TouchableOpacity style={styles.button} onPress={this.showDeviceInfo}>
            <Text style={styles.btnText}>点击获取</Text>
          </TouchableOpacity>
          <Text style={styles.info}>{deviceInfo}</Text>
          {deviceInfo === "" ? (
            <View />
          ) : (
            <View style={[styles.container, { marginTop: 10 }]}>
              <Text style={styles.info}>{`电池电量:  ${batteryLevel}`}</Text>
              <Text style={styles.info}>{`IP地址:  ${IPAddress}`}</Text>
              <Text style={styles.info}>{`MAC地址:  ${MACAddress}`}</Text>
              <Text
                style={styles.info}
              >{`是否是飞行模式:  ${isAirPlaneMode}`}</Text>
              <Text
                style={styles.info}
              >{`是否在充电中:  ${isBatteryCharging}`}</Text>
              <Text
                style={styles.info}
              >{`解锁类型:  ${isPinOrFingerprintSet}`}</Text>
              <Text
                style={styles.info}
              >{`是否自动更新时间:  ${isAutoDateAndTime}`}</Text>
              <Text
                style={styles.info}
              >{`是否自动更新时区:  ${isAutoTimeZone}`}</Text>
            </View>
          )}
        </View>
      </ScrollView>
    );
  }
}
