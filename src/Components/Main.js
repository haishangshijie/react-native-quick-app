import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  ToastAndroid,
  Dimensions
} from "react-native";
import { navigate } from "../Navigator";
import MainCell from "../Common/MainCell";
import V from "../Variables";

const styles = StyleSheet.create({
  intro: {
    fontSize: 16,
    color: "#666",
    margin: 30,
    textAlign: "center"
  },
  flatlist: {
    flex: 1,
    padding: 10,
    backgroundColor: V.V.primaryColor
  },
  footer: {
    height: 30
  }
});

type Props = {};
export default class Main extends Component<Props> {
  componentWillMount() {
    console.log("V ", V);
  }

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
      { id: "1", title: "通用组件", icon: "component", page: "Common" },
      { id: "2", title: "容器组件", icon: "component", page: "Container" },
      { id: "3", title: "基础组件", icon: "component", page: "Basic" },
      { id: "4", title: "表单组件", icon: "component", page: "Form" },
      { id: "5", title: "媒体组件", icon: "component", page: "Videos" },
      { id: "6", title: "其他组件", icon: "component", page: "Other" }
    ];
    return (
      <FlatList
        style={styles.flatlist}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        data={data}
        refreshing={false}
        initialNumToRender={6}
        removeClippedSubviews={true}
        ListHeaderComponent={
          <Text style={styles.intro}>以下展示快应用组件相关能力, 仅供参考</Text>
        }
        ListFooterComponent={<View style={styles.footer} />}
      />
    );
  }
}
