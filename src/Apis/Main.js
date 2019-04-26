import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet, ToastAndroid } from "react-native";
import { navigate } from "../Navigator";
import MainCell from "../Common/MainCell";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  flatlist: {
    margin: 10
  },
  intro: {
    fontSize: 16,
    color: "#666",
    margin: 30,
    marginTop: 50
  }
});

type Props = {};
export default class Main extends Component<Props> {
  static navigationOptions = {
    header: null
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
    <MainCell
      title={item.title}
      icon={item.icon}
      onCellClick={this.showAbility(item)}
    />
  );

  render() {
    const data = [
      { id: "0", title: "应用信息", icon: "component", page: "AppInfo" },
      { id: "1", title: "设备信息", icon: "component", page: "DeviceInfo" },
      { id: "2", title: "界面交互", icon: "component", page: "Interaction" },
      { id: "3", title: "网络访问", icon: "component", page: "Weather" },
      { id: "4", title: "网页网址", icon: "component", page: "Web" },
      { id: "5", title: "存储数据", icon: "component", page: "Storage" },
      { id: "6", title: "系统能力", icon: "component", page: "Ability" },
      { id: "7", title: "安全算法", icon: "component", page: "Security" },
      { id: "8", title: "音频视频", icon: "component", page: "Media" },
      { id: "9", title: "厂商服务", icon: "component", page: "Service" }
    ];
    return (
      <View style={styles.container}>
        <Text style={styles.intro}>以下展示快应用接口相关能力, 仅供参考</Text>
        <FlatList
          style={styles.flatlist}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          data={data}
          removeClippedSubviews={true}
        />
      </View>
    );
  }
}
