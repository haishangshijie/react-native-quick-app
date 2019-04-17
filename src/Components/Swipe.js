import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  PanResponder,
  ToastAndroid
} from "react-native";
import V from "../Variables";

const colorArray = [
  "white",
  "yellow",
  "pink",
  "orange",
  "red",
  "green",
  "blue",
  "cyan",
  "purple",
  "#FFE4E1",
  "#FF6EB4",
  "#FF69B4",
  "#F08080",
  "#C6E2FF",
  "#C1FFC1",
  "#C0FF3E",
  "#BC8F8F",
  "#7EC0EE",
  "#00FA9A",
  "#FF1493"
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  text: {
    width: 160,
    fontSize: 18,
    color: "#333",
    textAlign: "center"
  }
});

type Props = {};
export default class Swipe extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      color: "white"
    };
  }
  panResponder: {};

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: this.handlePanResponderGrant,
      onPanResponderMove: this.handlePanResponderMove,
      onPanResponderRelease: this.handlePanResponderEnd,
      onPanResponderTerminate: this.handlePanResponderEnd
    });
  }

  handlePanResponderGrant = gestureState => {
    // console.log("handlePanResponderGrant ", gestureState.nativeEvent);
  };

  handlePanResponderMove = gestureState => {
    // console.log("handlePanResponderMove ", JSON.stringify(gestureState));
  };

  handlePanResponderEnd = (event, gestureState) => {
    const { dx, dy } = gestureState;
    console.log("PanResponderEnd  dx", gestureState.dx);
    console.log("PanResponderEnd  dy", gestureState.dy);

    let move = "";
    if (dx === 0 && dy === 0) {
      return;
    } else if (dx >= 0 && dy >= 0) {
      move = dy > dx ? "向下移动" : "向右移动";
    } else if (dx <= 0 && dy <= 0) {
      move = dy > dx ? "向左移动" : "向上移动";
    } else if (dx >= 0 && dy <= 0) {
      move = -dy > dx ? "向上移动" : "向右移动";
    } else {
      move = dy > -dx ? "向下移动" : "向左移动";
    }
    ToastAndroid.show(move, 0.5);

    const random = Math.floor(Math.random() * colorArray.length);
    console.log("random ", random);
    this.setState({ color: colorArray[random] });
  };

  render() {
    const { arrow, color } = this.state;
    return (
      <View
        style={[styles.container, { backgroundColor: color }]}
        {...this.panResponder.panHandlers}
      >
        <Text style={styles.text}>请在屏幕上滑动</Text>
      </View>
    );
  }
}
