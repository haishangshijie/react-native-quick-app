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
export default class Other extends Component<Props> {
  static navigationOptions = {
    title: "其他组件",
    gesturesEnabled: true
  };

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
    <TextCell title={item.title} onCellClick={this.showAbility(item)} />
  );

  render() {
    const data = [{ id: "1", title: "Web", page: "WebView" }];
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
