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
export default class App extends Component<Props> {
  showAbility = item => () => {
    if (item.page) {
      if (item.page === "WebView") {
        navigate("WebView", { url: "https://m.jd.com" });
      } else {
        navigate(item.page);
      }
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
      { id: "1", title: "JD 京东", icon: "component", page: "WebView" },
      { id: "2", title: "定时器", icon: "component", page: "Timer" },
      {
        id: "3",
        title: "列表下拉刷新上拉加载",
        icon: "component",
        page: "Refresh"
      }
    ];
    return (
      <View style={styles.container}>
        <Text style={styles.intro}>以下展示快应用 常用布局, 仅供参考</Text>
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
