import React, { Component } from "react";
import { FlatList, StyleSheet, ToastAndroid } from "react-native";
import { navigate } from "../Navigator";
import V from "../Variables";
import TextCell from "../Common/TextCell";
import BackIcon from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
    padding: 10,
    backgroundColor: V.V.primaryColor
  }
});

type Props = {};
export default class Basic extends Component<Props> {
  static navigationOptions = {
    title: "基础组件",
    gesturesEnabled: true
    // headerBackImage: <BackIcon size={30} name="arrow-back" color="black" />
  };

  showAbility = item => () => {
    if (item.page) {
      navigate(item.page);
    } else {
      ToastAndroid.show("正在开发中,敬请期待...", 1);
    }
  };

  keyExtractor = item => item.id;

  renderItem = ({ item }) => (
    <TextCell title={item.title} onCellClick={this.showAbility(item)} />
  );

  render() {
    const data = [
      { id: "1", title: "image", page: "Image" },
      { id: "2", title: "progress", page: "ProgressBar" },
      { id: "3", title: "rating", page: "" },
      { id: "4", title: "span", page: "" },
      { id: "5", title: "text", page: "Label" }
    ];
    return (
      <FlatList
        style={styles.flatlist}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        data={data}
        removeClippedSubviews={true}
      />
    );
  }
}
