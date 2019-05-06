import React, { Component } from "react";
import { FlatList, StyleSheet, ToastAndroid } from "react-native";
import { navigate } from "../Navigator";
import TextCell from "../Common/TextCell";
import BackIcon from "react-native-vector-icons/MaterialIcons";
import V from "../Variables";

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
    padding: 10,
    backgroundColor: V.V.primaryColor
  }
});

type Props = {};
export default class Ability extends Component<Props> {
  static navigationOptions = {
    title: "系统能力",
    gesturesEnabled: true,
    headerBackImage: <BackIcon size={30} name="arrow-back" color="black" />
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
      { id: "1", title: "二维码", page: "Qrcode" },
      { id: "2", title: "传感器", page: "Sensor" },
      { id: "3", title: "剪贴板", page: "Clipboards" },
      { id: "4", title: "地理位置", page: "Location" },
      { id: "5", title: "桌面图标", page: "" },
      { id: "6", title: "日历事件", page: "" },
      { id: "7", title: "网络状态", page: "NetWorkInfo" },
      { id: "8", title: "电话短信", page: "OpenUrl" },
      { id: "9", title: "屏幕亮度", page: "" },
      { id: "10", title: "系统音量", page: "" },
      { id: "11", title: "录音", page: "Audios" }
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
