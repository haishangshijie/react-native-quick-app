import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  rightView: {
    flex: 1,
    padding: 10,
    flexDirection: "row"
  },
  title: {
    fontSize: 18,
    color: "#333"
  },
  typeView: {
    flexDirection: "row"
  },
  type: {
    fontSize: 12,
    color: "#666",
    backgroundColor: "#999",
    padding: 3
  },
  price: {
    fontSize: 18,
    color: "red"
  }
});

type Props = {};
export default class ItemCell extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon name="film" size={50} color="black" />
        <View style={styles.rightView}>
          <Text style={styles.title}>
            The Avengers: End Game 复仇者联盟: 终局之战 The Avengers: End Game
            复仇者联盟: 终局之战 The Avengers: End Game 复仇者联盟: 终局之战
          </Text>
          <View style={styles.typeView}>
            <Text style={styles.type}>电影</Text>
            <Text style={styles.type}>漫威</Text>
            <Text style={styles.type}>超级英雄</Text>
          </View>
          <Text style={styles.price}>¥ 999.99</Text>
        </View>
      </View>
    );
  }
}
