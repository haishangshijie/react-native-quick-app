import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import V from "../Variables";

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 240,
    alignItems: "center",
    backgroundColor: V.V.primaryColor,
    borderBottomColor: "white",
    borderBottomWidth: 1
  },
  icon: {
    padding: 10
  },
  title: {
    fontSize: 18,
    color: "#333",
    marginBottom: 10
  },
  typeView: {
    flexDirection: "row"
  },
  type: {
    height: 18,
    fontSize: 12,
    color: "#666",
    backgroundColor: "#999",
    paddingHorizontal: 5,
    marginRight: 10
  },
  price: {
    fontSize: 20,
    color: "red"
  }
});

type Props = {};
export default class RowCell extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon style={styles.icon} name="film" size={100} color="black" />
        <Text style={styles.title}>
          The Avengers: End Game 复仇者联盟: 终局之战
        </Text>
        <View style={styles.typeView}>
          <Text style={styles.type}>电影</Text>
          <Text style={styles.type}>漫威</Text>
          <Text style={styles.type}>十年巨制</Text>
        </View>
        <Text style={styles.price}>{`¥ 999.99              `}</Text>
      </View>
    );
  }
}
