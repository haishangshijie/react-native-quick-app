import React, { Component } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { navigate } from "../Navigator";
import TextCell from "../Common/TextCell";
import ScrollableTabView from "react-native-scrollable-tab-view";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  flatlist: {
    margin: 10,
    backgroundColor: "#F5FCFF"
  }
});

type Props = {};
export default class List extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: [],
      isRow: false,
      colun: 1
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

  showAbility = item => {
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
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <ScrollableTabView>
          <ReactPage tabLabel="React" />
          <FlowPage tabLabel="Flow" />
          <JestPage tabLabel="Jest" />
        </ScrollableTabView>
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
