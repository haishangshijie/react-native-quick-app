import { Dimensions, StyleSheet } from "react-native";
import DeviceInfo from "react-native-device-info";

const { width: pgWidth, height: pgHeight } = Dimensions.get("window");
const paddingBase = 15;

export default {
  pgWidth,
  pgWidthHalf: pgWidth / 2,
  pgHeight,
  pgHeightHalf: pgHeight / 2,
  paddingBase, // Base global padding around a View
  paddingBaseHalf: paddingBase / 2,
  paddingBaseDouble: paddingBase * 2,

  // border
  borderWidth: StyleSheet.hairlineWidth,
  borderRadius5: 5,

  // qrcode
  qrScanMaskColor: "rgba(0, 0, 0, 0.6)",
  qrScanCornerColor: "#840d23",
  qrScanCornerBorderSize: 4,
  qrScanBorderColor: "#ffffff",
  qrScanBorderSize: StyleSheet.hairlineWidth,
  qrScanBarColor: "#840d23",
  qrCodeBgColor: "#222222",
  qrCodeFgColor: "#ffffff",
  qrScanBoxSize: 220,

  // Dialog
  dialogBorderRadius: 10,
  dialogCloseBtnColor: "#ffffff"
};
