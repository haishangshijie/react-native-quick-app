// @flow
import { createStackNavigator } from "react-navigation";
import paramsToProps from "./utils";
import AppTabbar from "./AppTabbar";

// Apis
import AppInfo from "../Apis/AppInfo";
import Ability from "../Apis/Ability";
import AlertAndroid from "../Apis/AlertAndroid";
import Clipboards from "../Apis/Clipboards";
import DeviceInfo from "../Apis/DeviceInfo";
import Interaction from "../Apis/Interaction";
import Location from "../Apis/Location";
import NetWorkInfo from "../Apis/NetWorkInfo";
import OpenUrl from "../Apis/OpenUrl";
import Qrcode from "../Apis/Qrcode";
// import QRScanner from "../Apis/QRScanner";
import Security from "../Apis/Security";
import Sensor from "../Apis/Sensor";
import Service from "../Apis/Service";
import ShareAndroid from "../Apis/ShareAndroid";
import Storage from "../Apis/Storage";
import Weather from "../Apis/Weather";
import Web from "../Apis/Web";
import WebView from "../Apis/WebView";

// Conponents
import Basic from "../Components/Basic";
import Common from "../Components/Common";
import Container from "../Components/Container";
import Div from "../Components/Div";
import Form from "../Components/Form";
import Image from "../Components/Image";
import Input from "../Components/Input";
import Label from "../Components/Label";
import List from "../Components/List";
import Other from "../Components/Other";
import Refresh from "../Components/Refresh";
import ScrollTabbar from "../Components/ScrollTabbar";
import SliderInput from "../Components/SliderInput";
import Swipe from "../Components/Swipe";
import SwitchInput from "../Components/SwitchInput";
import Textarea from "../Components/Textarea";

// Layout
import Timer from "../Layout/Timer";

export default createStackNavigator(
  {
    AppTabbar,

    // Apis
    AppInfo: paramsToProps(AppInfo),
    Ability: paramsToProps(Ability),
    AlertAndroid: paramsToProps(AlertAndroid),
    Clipboards: paramsToProps(Clipboards),
    DeviceInfo: paramsToProps(DeviceInfo),
    Interaction: paramsToProps(Interaction),
    Location: paramsToProps(Location),
    NetWorkInfo: paramsToProps(NetWorkInfo),
    OpenUrl: paramsToProps(OpenUrl),
    Qrcode: paramsToProps(Qrcode),
    // QRScanner: paramsToProps(QRScanner),
    Security: paramsToProps(Security),
    Sensor: paramsToProps(Sensor),
    Service: paramsToProps(Service),
    ShareAndroid: paramsToProps(ShareAndroid),
    Storage: paramsToProps(Storage),
    Weather: paramsToProps(Weather),
    Web: paramsToProps(Web),
    WebView: paramsToProps(WebView),

    // Conponents
    Basic: paramsToProps(Basic),
    Common: paramsToProps(Common),
    Container: paramsToProps(Container),
    Div: paramsToProps(Div),
    Form: paramsToProps(Form),
    Image: paramsToProps(Image),
    Input: paramsToProps(Input),
    Label: paramsToProps(Label),
    List: paramsToProps(List),
    Other: paramsToProps(Other),
    Refresh: paramsToProps(Refresh),
    ScrollTabbar: paramsToProps(ScrollTabbar),
    SliderInput: paramsToProps(SliderInput),
    Swipe: paramsToProps(Swipe),
    SwitchInput: paramsToProps(SwitchInput),
    Textarea: paramsToProps(Textarea),

    // Layout
    Timer: paramsToProps(Timer)
  },
  {
    initialRouteName: "AppTabbar",
    headerMode: "screen",
    cardStyle: {
      shadowColor: "transparent"
    }
  }
);
