/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AppStackNav from "./src/Navigator/AppStackNav";
import { setNavigator } from "./src/Navigator";

const AppNavigator = createAppContainer(
  createSwitchNavigator(
    {
      App: AppStackNav
    },
    {
      initialRouteName: "App"
    }
  )
);

type Props = {};
export default class App extends Component<Props> {
  componentWillMount() {}

  render() {
    return (
      <AppNavigator
        ref={(nav: any) => {
          setNavigator(nav);
        }}
      />
    );
  }
}
