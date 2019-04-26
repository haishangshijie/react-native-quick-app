import React, { Component } from "react";
import { FlatList, StyleSheet, ToastAndroid } from "react-native";
import { navigate } from "../Navigator";
import TextCell from "../Common/TextCell";

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F5FCFF"
  }
});

type Props = {};
export default class Common extends Component<Props> {
  static navigationOptions = {
    title: "通用组件",
    gesturesEnabled: true
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
      { id: "1", title: "通用事件", page: "Swipe" },
      { id: "2", title: "通用属性", page: "" },
      { id: "3", title: "通用样式", page: "" },
      { id: "4", title: "通用动画", page: "ActivityIndicators" },
      { id: "5", title: "通用渐变", page: "" }
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
