import React, { Component } from "react";
import { Text, View, Slider, StyleSheet } from "react-native";
import V from "../Variables";
import BackIcon from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: V.V.primaryColor
  },
  text: {
    fontSize: 18,
    color: "#333",
    padding: 20,
    textAlign: "center"
  }
});

type Props = {};
export default class SliderInput extends Component<Props> {
  static navigationOptions = {
    title: "Slider",
    gesturesEnabled: true,
    headerBackImage: <BackIcon size={30} name="arrow-back" color="black" />
  };

  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    const { textInput } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.sliderView}>
          <Text style={styles.text}>Slider</Text>
          <Slider style={{ width: 200 }} value={0} />
        </View>
      </View>
    );
  }
}
