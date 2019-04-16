// @flow
import React, { Component } from "react";
import { BackHandler, Platform } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { getCurrentRoute, getCurrentRouteName } from "./index";
import AppStack from "./AppStack";

export default class AppStackNav extends Component {
  static router = AppStack.router;
  isTransitioning = false;
  lastBackPressed;

  componentDidMount() {
    if (Platform.OS === "android") {
      BackHandler.addEventListener("hardwareBackPress", this.onBackAndroid);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === "android") {
      BackHandler.removeEventListener("hardwareBackPress", this.onBackAndroid);
    }
  }

  onBackAndroid = () => {
    const { common } = this.props;
    const currentScreen = getCurrentRouteName();
    const currentRoute = getCurrentRoute();
    if (
      currentRoute &&
      currentRoute.params &&
      currentRoute.params.onHardwareBack
    ) {
      // Let the Screen handle the onHardwareBack
      currentRoute.params.onHardwareBack();
      return true;
    }

    if (this.isTransitioning) {
      // wait loading finished
      return true;
    }

    if (currentScreen !== "AppTabBar") {
      // pop view
      return false;
    }

    if (this.lastBackPressed && this.lastBackPressed + 1000 >= Date.now()) {
      BackHandler.exitApp();
      return false;
    }

    this.lastBackPressed = Date.now();

    return true;
  };

  render() {
    const { navigation } = this.props;

    return <AppStack navigation={navigation} />;
  }
}
