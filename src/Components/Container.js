import React, { Component } from "react";
import { FlatList, StyleSheet, ToastAndroid } from "react-native";
import { navigate } from "../Navigator";
import TextCell from "../Common/TextCell";

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
    margin: 10,
    backgroundColor: "#F5FCFF"
  }
});

type Props = {};
export default class Container extends Component<Props> {
  showAbility = item => {
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
      { id: "1", title: "div", page: "Swipe" },
      { id: "2", title: "list", page: "" },
      { id: "3", title: "list-item", page: "" },
      { id: "4", title: "refresh", page: "" },
      { id: "5", title: "richtext", page: "" },
      { id: "6", title: "stack", page: "" },
      { id: "7", title: "swiper", page: "" },
      { id: "8", title: "tabs", page: "" },
      { id: "9", title: "tab-bar", page: "" },
      { id: "10", title: "tab-content", page: "" }
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
