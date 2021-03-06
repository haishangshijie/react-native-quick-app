import React, { Component } from "react";
import { Text, View, StyleSheet, Picker, ToastAndroid } from "react-native";
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
    width: 160,
    fontSize: 18,
    color: "#333",
    textAlign: "center"
  }
});

type Props = {};
export default class Pickers extends Component<Props> {
  static navigationOptions = {
    title: "Picker",
    gesturesEnabled: true,
    headerBackImage: <BackIcon size={30} name="arrow-back" color="black" />
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      language: "Java"
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 160 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    );
  }
}
