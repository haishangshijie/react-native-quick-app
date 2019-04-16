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
export default class Main extends Component<Props> {
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
      { id: "1", title: "通用组件", icon: "component", page: "Common" },
      { id: "2", title: "容器组件", icon: "component", page: "Container" },
      { id: "3", title: "基础组件", icon: "component", page: "Basic" },
      { id: "4", title: "表单组件", icon: "component", page: "Form" },
      { id: "5", title: "媒体组件", icon: "component", page: "" },
      { id: "6", title: "其他组件", icon: "component", page: "Other" }
    ];
    return (
      <View style={styles.container}>
        <Text style={styles.intro}>以下讲展示快应用组件相关能力, 仅供参考</Text>
        <FlatList
          style={styles.flatlist}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          data={data}
          refreshing={false}
          initialNumToRender={6}
          removeClippedSubviews={true}
        />
      </View>
    );
  }
}
