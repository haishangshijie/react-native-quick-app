import React, { Component } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  ToastAndroid,
  ActivityIndicator
} from "react-native";
import ItemCell from "../Common/ItemCell";
import V from "../Variables";
import BackIcon from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: V.V.primaryColor
  }
});

type Props = {};
export default class Refresh extends Component<Props> {
  static navigationOptions = {
    title: "List",
    gesturesEnabled: true,
    headerBackImage: <BackIcon size={30} name="arrow-back" color="black" />
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      data: [],
      refreshing: false,
      loadMore: false
    };
  }

  componentWillMount() {
    let data = [];
    for (let i = 0; i < 10; i++) {
      data.push({ id: i.toString() });
    }
    console.log("data ", JSON.stringify(data));
    this.setState({ data });
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
    this.loadTimer && clearTimeout(this.loadTimer);
  }

  refreshFlatlist = () => {
    this.setState({ refreshing: true });
    this.timer = setTimeout(() => {
      this.setState({ refreshing: false });
    }, 2000);
  };

  loadMore = () => {
    this.setState({ loadMore: true });
    this.loadTimer = setTimeout(() => {
      this.setState({ loadMore: false });
    }, 2000);
  };

  keyExtractor = item => item.id;

  renderItem = ({ item }) => <ItemCell />;

  render() {
    const { data, array, isRow, colun, refreshing, loadMore } = this.state;
    return (
      <FlatList
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        data={data}
        removeClippedSubviews={true}
        onRefresh={this.refreshFlatlist}
        refreshing={refreshing}
        onEndReached={this.loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          loadMore ? <ActivityIndicator size="large" /> : false
        }
      />
    );
  }
}
