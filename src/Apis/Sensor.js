import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
  DeviceEventEmitter
} from "react-native";
import Geolocation from "Geolocation";
import { SensorManager } from "NativeModules";
import BackIcon from "react-native-vector-icons/MaterialIcons";
import V from "../Variables";

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: V.V.primaryColor
  },
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    width: 200,
    height: 44,
    marginBottom: 30,
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
    lineHeight: 20,
    color: "#333",
    textAlign: "center",
    margin: 20
  }
});

type Props = {};
export default class Sensor extends Component<Props> {
  static navigationOptions = {
    title: "传感器",
    gesturesEnabled: true,
    headerBackImage: <BackIcon size={30} name="arrow-back" color="black" />
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      acc: "", // 加速度
      gyr: "", // 陀螺仪
      mag: "", // 磁强计
      ori: "", // 方向仪
      step: "", // 步数
      ther: "", // 温度
      light: "", // 光线
      pro: "", // 距离
      accDisable: false,
      gyrDisable: false,
      magDisable: false,
      oriDisable: false,
      stepDisable: false,
      therDisable: false,
      lightDisable: false,
      proDisable: false
    };
  }

  componentWillMount() {}

  componentWillUnmount() {
    SensorManager.stopAccelerometer();
    SensorManager.stopGyroscope();
    SensorManager.stopMagnetometer();
    SensorManager.stopOrientation();
    SensorManager.stopStepCounter();
    SensorManager.stopThermometer();
    SensorManager.stopLightSensor();
    SensorManager.stopProximity();
  }

  handleStartAccelerometer = () => {
    let self = this;
    self.setState({ accDisable: true });
    // 加速度传感器
    SensorManager.startAccelerometer(100); // To start the accelerometer with a minimum delay of 100ms between events.
    DeviceEventEmitter.addListener("Accelerometer", function(data) {
      /**
       * data.x
       * data.y
       * data.z
       **/
      console.log("加速度传感器 ", JSON.stringify(data));
      self.setState({ acc: data });
    });
  };

  handleStartGyroscope = () => {
    let self = this;
    self.setState({ gyrDisable: true });
    // 陀螺仪
    DeviceEventEmitter.addListener("Gyroscope", function(data) {
      /**
       * data.x
       * data.y
       * data.z
       **/
      console.log("陀螺仪传感器 ", JSON.stringify(data));
      self.setState({ gyr: data });
    });
    SensorManager.startGyroscope(100);
  };

  handleStartMagnetometer = () => {
    let self = this;
    self.setState({ magDisable: true });
    // 磁强计
    SensorManager.startMagnetometer(100);
    DeviceEventEmitter.addListener("Magnetometer", function(data) {
      /**
       * data.x
       * data.y
       * data.z
       **/
      console.log("磁强计传感器 ", JSON.stringify(data));
      self.setState({ mag: data });
    });
  };

  handleStartOrientation = () => {
    let self = this;
    self.setState({ oriDisable: true });
    // 方向传感器
    SensorManager.startOrientation(100);
    DeviceEventEmitter.addListener("Orientation", function(data) {
      /**
       * data.azimuth
       * data.pitch
       * data.roll
       **/
      console.log("方向传感器 ", JSON.stringify(data));
      self.setState({ ori: data });
    });
  };

  handleStartStepCounter = () => {
    let self = this;
    self.setState({ stepDisable: true });
    // 步数计数器
    SensorManager.startStepCounter(1000);
    DeviceEventEmitter.addListener("StepCounter", function(data) {
      /**
       * data.steps
       **/
      console.log("步数计数器 ", JSON.stringify(data));
      self.setState({ step: data });
    });
  };

  handleStartThermometer = () => {
    let self = this;
    self.setState({ therDisable: true });
    // 温度计
    SensorManager.startThermometer(1000);
    DeviceEventEmitter.addListener("Thermometer", function(data) {
      /**
       * data.temp
       **/
      console.log("温度计 ", JSON.stringify(data));
      self.setState({ ther: data });
    });
  };

  handleStartLightSensor = () => {
    let self = this;
    self.setState({ lightDisable: true });
    // 光线传感器
    SensorManager.startLightSensor(100);
    DeviceEventEmitter.addListener("LightSensor", function(data) {
      /**
       * data.light
       **/
      console.log("光线传感器 ", JSON.stringify(data));
      self.setState({ light: data });
    });
  };

  handleStartProximity = () => {
    let self = this;
    self.setState({ proDisable: true });
    // 距离传感器
    SensorManager.startProximity(100);
    DeviceEventEmitter.addListener("Proximity", function(data) {
      /**
       * data.isNear: [Boolean] A flag representing whether something is near the screen.
       * data.value: [Number] The raw value returned by the sensor (usually distance in cm).
       * data.maxRange: [Number] The maximum range of the sensor.
       **/
      console.log("距离传感器 ", JSON.stringify(data));
      self.setState({ pro: data });
    });
  };

  render() {
    const {
      acc,
      gyr,
      mag,
      ori,
      step,
      ther,
      light,
      pro,
      accDisable,
      gyrDisable,
      magDisable,
      oriDisable,
      stepDisable,
      therDisable,
      lightDisable,
      proDisable
    } = this.state;
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          {/* <Text style={styles.text}>{`加速度传感器数据:\n  x:${acc.x}\n  y:${
            acc.y
          }\n  z:${acc.z}`}</Text>
          <TouchableOpacity
            disabled={accDisable}
            style={[
              styles.button,
              { backgroundColor: accDisable ? "grey" : "green" }
            ]}
            onPress={this.handleStartAccelerometer}
          >
            <Text style={styles.buttonText}>{`监听加速度传感器${
              accDisable ? "中..." : ""
            }`}</Text>
          </TouchableOpacity> */}
          <Text style={styles.text}>{`陀螺仪传感器数据:\n  x:${
            gyr.x ? gyr.x : ""
          }\n  y:${gyr.y ? gyr.y : ""}\n  z:${gyr.z ? gyr.z : ""}`}</Text>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: gyrDisable ? "grey" : "green" }
            ]}
            disabled={gyrDisable}
            onPress={this.handleStartGyroscope}
          >
            <Text style={styles.buttonText}>{`监听陀螺仪传感器${
              gyrDisable ? "中..." : ""
            }`}</Text>
          </TouchableOpacity>
          {/* <Text style={styles.text}>{`磁强计传感器数据:\n  x:${mag.x}\n  y:${
            mag.y
          }\n  z:${mag.z}`}</Text>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: magDisable ? "grey" : "green" }
            ]}
            disabled={magDisable}
            onPress={this.handleStartMagnetometer}
          >
            <Text style={styles.buttonText}>{`监听磁强计传感器${
              magDisable ? "中..." : ""
            }`}</Text>
          </TouchableOpacity> */}
          <Text style={styles.text}>{`罗盘传感器数据:\n  方位角:${
            ori.azimuth ? ori.azimuth : ""
          }\n  倾斜角:${ori.pitch ? ori.pitch : ""}\n  滚动角:${
            ori.roll ? ori.roll : ""
          }`}</Text>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: oriDisable ? "grey" : "green" }
            ]}
            disabled={oriDisable}
            onPress={this.handleStartOrientation}
          >
            <Text style={styles.buttonText}>{`监听罗盘传感器${
              oriDisable ? "中..." : ""
            }`}</Text>
          </TouchableOpacity>
          <Text
            style={styles.text}
          >{`步数传感器数据\n(目前记录系统重启后总步数):\n  steps:　${
            step.steps ? step.steps : ""
          }`}</Text>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: stepDisable ? "grey" : "green" }
            ]}
            disabled={stepDisable}
            onPress={this.handleStartStepCounter}
          >
            <Text style={styles.buttonText}>{`监听步数传感器${
              stepDisable ? "中..." : ""
            }`}</Text>
          </TouchableOpacity>
          {/* <Text style={styles.text}>{`温度传感器数据:\n  temp:${
            ther.temp
          }`}</Text>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: therDisable ? "grey" : "green" }
            ]}
            disabled={therDisable}
            onPress={this.handleStartThermometer}
          >
            <Text style={styles.buttonText}>{`监听温度传感器${
              therDisable ? "中..." : ""
            }`}</Text>
          </TouchableOpacity> */}
          <Text style={styles.text}>{`光线传感器数据:\n  light:　${
            light.light ? light.light : ""
          }`}</Text>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: lightDisable ? "grey" : "green" }
            ]}
            disabled={lightDisable}
            onPress={this.handleStartLightSensor}
          >
            <Text style={styles.buttonText}>{`监听光线传感器${
              lightDisable ? "中..." : ""
            }`}</Text>
          </TouchableOpacity>
          <Text style={styles.text}>{`距离传感器数据:\n  是否靠近屏幕:　${
            pro.isNear ? "是" : "否"
          }\n value:　${pro.value}\n  maxRange:　${pro.maxRange}`}</Text>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: proDisable ? "grey" : "green" }
            ]}
            disabled={proDisable}
            onPress={this.handleStartProximity}
          >
            <Text style={styles.buttonText}>{`监听距离传感器${
              proDisable ? "中..." : ""
            }`}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
