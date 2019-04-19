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
export default class Ability extends Component<Props> {
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
      { id: "1", title: "二维码", page: "Qrcode" },
      { id: "2", title: "传感器", page: "" },
      { id: "3", title: "剪贴板", page: "Clipboards" },
      { id: "4", title: "地理位置", page: "Location" },
      { id: "5", title: "桌面图标", page: "" },
      { id: "6", title: "日历事件", page: "" },
      { id: "7", title: "网络状态", page: "NetWorkInfo" },
      { id: "8", title: "屏幕亮度", page: "" },
      { id: "9", title: "系统音量", page: "" },
      { id: "10", title: "录音", page: "" }
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