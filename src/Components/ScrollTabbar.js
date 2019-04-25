import React, { Component } from "react";
import {
  View,
  Text,
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
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
export default class ScrollTabBar extends Component<Props> {
  static navigationOptions = {
    title: "Tabbar",
    gesturesEnabled: true
  };

  constructor(props: Props) {
    super(props);
    this.state = {};
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

  render() {
    const array = [
      {
        title: "tab1"
      },
      {
        title: "tab2"
      },
      {
        title: "tab3"
      }
    ];
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
          tabBarPosition="bottom"
          tabBarBackgroundColor="#fcfcfc"
          tabBarUnderlineStyle={styles.tabBarUnderline}
          tabBarActiveTextColor="#3e9ce9"
          tabBarInactiveTextColor="#aaaaaa"
        >
          {array.map((item, index) => (
            <View key={item.title} tabLabel={item.title} style={styles.base}>
              <Text>{`content ${index + 1}`}</Text>
            </View>
          ))}
        </ScrollableTabView>
      </View>
    );
  }
}
