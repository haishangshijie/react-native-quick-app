import React, { Component } from "react";
import { FlatList, StyleSheet, ToastAndroid } from "react-native";
import { navigate } from "../Navigator";
import V from "../Variables";
import TextCell from "../Common/TextCell";
import BackIcon from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
    padding: 10,
    backgroundColor: V.V.primaryColor
  }
});

type Props = {};
export default class Form extends Component<Props> {
  static navigationOptions = {
    title: "表单组件",
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
      { id: "1", title: "input", page: "Input" },
      { id: "2", title: "label", page: "Label" },
      { id: "3", title: "picker", page: "Pickers" },
      { id: "4", title: "select", page: "" },
      { id: "5", title: "slider", page: "SliderInput" },
      { id: "6", title: "switch", page: "SwitchInput" },
      { id: "7", title: "textarea", page: "Textarea" }
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
