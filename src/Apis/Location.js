import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid
} from "react-native";
import Geolocation from "Geolocation";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF"
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
export default class Location extends Component<Props> {
  static navigationOptions = {
    title: "地理位置",
    gesturesEnabled: true
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      lon: "",
      lat: "",
      lonChange: "",
      latChange: ""
    };
  }

  componentWillUnmount() {
    Geolocation.stopObserving();
  }

  handleGetLocation = () => {
    Geolocation.getCurrentPosition(
      this.getLocationSuccsess,
      this.getLocationFail
    );
  };

  getLocationSuccsess = location => {
    console.log("location ", JSON.stringify(location));
    this.setState({
      lon: location.coords.longitude,
      lat: location.coords.latitude
    });
  };

  getLocationFail = error => {
    console.log("location error ", JSON.stringify(error));
  };

  handleObserveLocation = () => {
    Geolocation.watchPosition(
      this.observeLocationSuccsess,
      this.observeLocationFail
    );
  };

  observeLocationSuccsess = location => {
    console.log("location ", JSON.stringify(location));
    this.setState({
      lonChange: location.coords.longitude,
      latChange: location.coords.latitude
    });
  };

  observeLocationFail = error => {
    console.log("location error ", JSON.stringify(error));
  };

  render() {
    const { lon, lat, lonChange, latChange } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>位置信息</Text>
        <Text style={styles.text}>{`longitude: ${lon}`}</Text>
        <Text style={styles.text}>{`latitude: ${lat}`}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleGetLocation}
        >
          <Text style={styles.buttonText}>获取地理位置</Text>
        </TouchableOpacity>
        <Text style={styles.text}>位置信息</Text>
        <Text style={styles.text}>{`longitude: ${lonChange}`}</Text>
        <Text style={styles.text}>{`latitude: ${latChange}`}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleObserveLocation}
        >
          <Text style={styles.buttonText}>监听地理位置</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
