// @flow
import { createStackNavigator } from "react-navigation";
import paramsToProps from "./utils";
import AppTabbar from "./AppTabbar";

// Apis
import AppInfo from "../Apis/AppInfo";
import DeviceInfo from "../Apis/DeviceInfo";
import Web from "../Apis/Web";
import WebView from "../Apis/WebView";

// Conponents
import Basic from "../Components/Basic";
import Common from "../Components/Common";
import Container from "../Components/Container";
import Div from "../Components/Div";
import Form from "../Components/Form";
import Image from "../Components/Image";
import List from "../Components/List";
import Other from "../Components/Other";
import Swipe from "../Components/Swipe";

// Layout

export default createStackNavigator(
  {
    AppTabbar,

    // Apis
    AppInfo: paramsToProps(AppInfo),
    DeviceInfo: paramsToProps(DeviceInfo),
    Web: paramsToProps(Web),
    WebView: paramsToProps(WebView),

    // Conponents
    Basic: paramsToProps(Basic),
    Common: paramsToProps(Common),
    Container: paramsToProps(Container),
    Div: paramsToProps(Div),
    Form: paramsToProps(Form),
    Image: paramsToProps(Image),
    List: paramsToProps(List),
    Other: paramsToProps(Other),
    Swipe: paramsToProps(Swipe)
  },
  {
    initialRouteName: "AppTabbar",
    headerMode: "none",
    cardStyle: {
      shadowColor: "transparent"
    }
  }
);
