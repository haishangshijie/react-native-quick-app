import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import V from "../Variables";

const itemWidth = V.V.pgWidthHalf - 15;

const styles = StyleSheet.create({
  container: {
    width: itemWidth,
    marginLeft: 10,
    marginBottom: 10,
    backgroundColor: V.V.primaryColor
  },
  icon: {
    // paddingLeft: (itemWidth - 100) / 2,
    alignSelf: "center",
    paddingVertical: 15
  },
  title: {
    fontSize: 18,
    color: "#333",
    paddingHorizontal: 10,
    marginBottom: 10
  },
  typeView: {
    flexDirection: "row",
    paddingHorizontal: 10
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
    color: "red",
    paddingHorizontal: 10
  }
});

type Props = {};
export default class FlowCell extends Component<Props> {
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
