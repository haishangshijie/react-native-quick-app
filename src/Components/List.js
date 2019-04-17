import React, { Component } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  ToastAndroid,
  ActivityIndicator
} from "react-native";
import ScrollableTabView, {
  ScrollableTabBar
} from "react-native-scrollable-tab-view";
import ItemCell from "../Common/ItemCell";
import RowCell from "../Common/RowCell";
import FlowCell from "../Common/FlowCell";

const styles = StyleSheet.create({
  base: {
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff"
  },
  tab: {
    paddingBottom: 0
  },
  tabText: {
    fontSize: 16
  },
  tabBarUnderline: {
    backgroundColor: "#3e9ce9",
    height: 2
  }
});

type Props = {};
export default class List extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: [],
      isRow: false,
      colun: 1,
      refreshing: false,
      loadMore: false,
      array: ["垂直列表", "水平列表", "瀑布流", "下拉刷新", "加载更多"]
    };
  }

  componentWillMount() {
    let data = [];
    for (let i = 0; i < 20; i++) {
      data.push({ id: i.toString() });
    }
    console.log("data ", JSON.stringify(data));
    this.setState({ data });
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
    this.loadTimer && clearTimeout(this.loadTimer);
  }

  handleTabbarChange = tab => {
    console.log("current index ： " + tab.i);
    if (tab.i === 1) {
      this.setState({ isRow: true, colun: 1 });
    } else if (tab.i === 2) {
      this.setState({ isRow: false, colun: 2 });
    } else {
      this.setState({ isRow: false, colun: 1 });
    }
  };

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

  renderItem = ({ item }) => {
    const { isRow, colun } = this.state;
    if (isRow) {
      return <RowCell />;
    } else {
      if (colun === 1) {
        return <ItemCell />;
      } else {
        return <FlowCell />;
      }
    }
  };

  renderFlowCell = ({ item }) => <FlowCell />;

  render() {
    const { data, array, isRow, colun, refreshing, loadMore } = this.state;
    return (
      <View style={styles.container}>
        <ScrollableTabView
          onChangeTab={this.handleTabbarChange}
          renderTabBar={() => (
            <ScrollableTabBar
              tabStyle={styles.tab}
              textStyle={styles.tabText}
            />
          )}
          tabBarBackgroundColor="#fcfcfc"
          tabBarUnderlineStyle={styles.tabBarUnderline}
          tabBarActiveTextColor="#3e9ce9"
          tabBarInactiveTextColor="#aaaaaa"
        >
          {array.map((item, index) => (
            <View key={item} tabLabel={item} style={styles.base}>
              <FlatList
                horizontal={index === 1}
                numColumns={index === 2 ? 2 : 1}
                renderItem={index === 2 ? this.renderFlowCell : this.renderItem}
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
            </View>
          ))}
        </ScrollableTabView>
      </View>
    );
  }
}
