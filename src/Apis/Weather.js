import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity
} from "react-native";
import V from "../Variables";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  inputView: {
    width: 200,
    marginTop: 50,
    alignItems: "center"
  },
  input: {
    width: 200,
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginBottom: 20
  },
  button: {
    width: 160,
    height: 34,
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
export default class Weather extends Component<Props> {
  static navigationOptions = {
    title: "网络访问",
    gesturesEnabled: true
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      weather: "",
      button: "南京"
    };
  }

  handleTextChange = text => {
    this.setState({ button: text });
  };

  getWeather = () => {
    const { button } = this.state;
    if (button) {
      // const time = new Date(timestamp).format("yyyy-MM-dd");
      // console.log("time stamp format ", time);
      const url = `https://route.showapi.com/9-2?area=${button}&need3HourForcast=0&needAlarm=0&needHourData=0&needIndex=0&needMoreDay=0&showapi_appid=91829&showapi_sign=fe925f522f2241f8a51625df80ca01e3`;
      console.log("url ", url);
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const body = data.showapi_res_body;
          console.log("body ", JSON.stringify(body));
          const weather = `
          城市:  ${body.cityInfo.c3}\n
          空气指数:  ${body.now.aqi}\n
          湿度:  ${body.now.sd}\n
          温度:  ${body.now.temperature} ℃\n
          天气:  ${body.now.weather}\n
          风向:  ${body.now.wind_direction}\n
          风力:  ${body.now.wind_power}\n
          空气质量:  ${body.now.aqiDetail.quality}\n
          日出日落时间:  ${body.f1.sun_begin_end}\n`;
          this.setState({ weather });
        })
        .catch(error => {
          console.log("error ", JSON.stringify(error));
          ToastAndroid.show("查询失败", 1);
        });
    }
  };

  render() {
    const { weather, button } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput style={styles.input} onChangeText={this.handleTextChange}>
            {button}
          </TextInput>
          <TouchableOpacity style={styles.button} onPress={this.getWeather}>
            <Text style={styles.buttonText}>{`查询${button}天气`}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>{weather}</Text>
      </View>
    );
  }
}
