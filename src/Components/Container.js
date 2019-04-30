import React, { Component } from "react";
import { FlatList, StyleSheet, ToastAndroid } from "react-native";
import { navigate } from "../Navigator";
import TextCell from "../Common/TextCell";
import V from "../Variables";
import BackIcon from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
    padding: 10,
    backgroundColor: V.V.primaryColor
  }
});

type Props = {};
export default class Container extends Component<Props> {
  static navigationOptions = {
    title: "容器组件",
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
      { id: "1", title: "div", page: "Div" },
      { id: "2", title: "list", page: "List" },
      { id: "3", title: "list-item", page: "List" },
      { id: "4", title: "refresh", page: "Refresh" },
      { id: "5", title: "richtext", page: "" },
      { id: "6", title: "stack", page: "" },
      { id: "7", title: "swiper", page: "" },
      { id: "8", title: "tabs", page: "ScrollTabbar" },
      { id: "9", title: "tab-bar", page: "ScrollTabbar" },
      { id: "10", title: "tab-content", page: "ScrollTabbar" }
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
