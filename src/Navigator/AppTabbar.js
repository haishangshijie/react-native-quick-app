import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/Feather";
// Tabs
import ApisMain from "../Apis/Main";
import ComponentsMain from "../Components/Main";
import LayoutMain from "../Layout/Main";

const styles = StyleSheet.create({
  tabBarView: {
    alignItems: "center",
    width: 40
  },
  labelText: {
    fontSize: 10,
    textAlign: "center"
  }
});

export default createBottomTabNavigator(
  {
    ComponentsMain: {
      screen: ComponentsMain,
      navigationOptions: { title: "组件" }
    },
    ApisMain: { screen: ApisMain },
    LayoutMain: { screen: LayoutMain }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let icon = 0;
        switch (routeName) {
          case "ComponentsMain":
            icon = "box";
            break;
          case "ApisMain":
            icon = "cpu";
            break;
          case "LayoutMain":
            icon = "layout";
            break;
          default:
            break;
        }
        return (
          <View style={styles.tabBarView}>
            <Icon name={icon} size={24} color={focused ? "green" : "grey"} />
          </View>
        );
      },
      tabBarLabel: ({ focused }) => {
        const { routeName } = navigation.state;
        let key = "";
        switch (routeName) {
          case "ComponentsMain":
            key = "组件";
            break;
          case "ApisMain":
            key = "接口";
            break;
          case "LayoutMain":
            key = "常用布局";
            break;
          default:
            break;
        }
        return (
          <Text
            style={[
              styles.labelText,
              focused ? { color: "green" } : { color: "grey" }
            ]}
            numberOfLines={1}
          >
            {key}
          </Text>
        );
      },
      tabBarOnPress: ({ navigation: tabNav, defaultHandler }) => {
        const { routeName } = tabNav.state;
        prevTabRouteName = routeName;
        // TODO: base on routeName scroll to the being when double tap
        defaultHandler();
      }
    }),
    initialRouteName: "ComponentsMain",
    tabBarOptions: {
      activeTintColor: "green",
      inactiveTintColor: "grey",
      style: {
        height: 55,
        marginBottom: 0,
        backgroundColor: "#ffffff",
        paddingVertical: 5
      }
    }
  }
);
