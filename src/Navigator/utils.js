import React, { Component } from "react";
/**
 * Make the navigation state params "this.props.navigation.state.params.<x>" become a component props
 * @param ScreenComponent Page component
 */
export default function paramsToProps(ScreenComponent: any) {
  return class extends Component<any> {
    static navigationOptions = ScreenComponent.navigationOptions;
    render() {
      const { params } = this.props.navigation.state;
      return <ScreenComponent {...this.props} {...params} />;
    }
  };
}
