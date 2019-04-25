import React, { Component } from "react";
import { Vibration, FlatList, StyleSheet, ToastAndroid } from "react-native";
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
export default class Interaction extends Component<Props> {
  static navigationOptions = {
    title: "页面交互",
    gesturesEnabled: true
  };

  showAbility = item => () => {
    if (item.page) {
      if (item.page === "WebView") {
        navigate("WebView", { url: "https://m.jd.com" });
      } else {
        navigate(item.page);
      }
    } else if (item.id === "5") {
      Vibration.vibrate(500);
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
      { id: "1", title: "分享", page: "ShareAndroid" },
      { id: "2", title: "弹窗", page: "AlertAndroid" },
      { id: "3", title: "打开网页", page: "WebView" },
      { id: "4", title: "通知消息", page: "" },
      { id: "5", title: "震动", page: "" }
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
