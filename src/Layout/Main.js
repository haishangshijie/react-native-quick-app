import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet, ToastAndroid } from "react-native";
import { navigate } from "../Navigator";
import MainCell from "../Common/MainCell";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  flatlist: {
    flex: 1,
    margin: 10
  },
  intro: {
    fontSize: 16,
    color: "#666",
    margin: 30
  }
});

type Props = {};
export default class App extends Component<Props> {
  showAbility = item => {
    if (item) {
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
      { id: "1", title: "通用组件", icon: "component", page: "" },
      { id: "2", title: "通用组件", icon: "component", page: "" },
      { id: "3", title: "通用组件", icon: "component", page: "" },
      { id: "4", title: "通用组件", icon: "component", page: "" },
      { id: "5", title: "通用组件", icon: "component", page: "" },
      { id: "6", title: "通用组件", icon: "component", page: "" }
    ];
    return (
      <View style={styles.container}>
        <Text style={styles.intro}>以下讲展示快应用 常用布局, 仅供参考</Text>
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
