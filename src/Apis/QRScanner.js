// @flow
import React, { PureComponent } from 'react';
import Camera from 'react-native-camera';
import { View, StyleSheet } from 'react-native';
import QRScannerRectView from './QRScannerRectView';

const styles = StyleSheet.create({
  buttonsContainer: {
    position: 'absolute',
    height: 100,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

type Props = {
  maskColor: string,
  borderColor: string,
  cornerColor: string,
  borderWidth: number,
  cornerBorderWidth: number,
  cornerBorderLength: number,
  rectHeight: number,
  rectWidth: number,
  isLoading: boolean,
  isCornerOffset: boolean, // 边角是否偏移
  cornerOffsetSize: number,
  bottomMenuHeight: number,
  scanBarAnimateTime: number,
  scanBarColor: string,
  scanBarImage: any,
  scanBarHeight: number,
  scanBarMargin: number,
  hintText: string,
  permissionDialogTitle: string,
  permissionDialogMessage: string,
  hintTextStyle: {},
  hintTextPosition: number,
  isShowScanBar: boolean,
  bottomMenuStyle: {},
  onScanResultReceived: () => void,
  renderTopBarView: () => void,
  renderBottomMenuView: () => void,
};

/**
 * 扫描界面
 */
export default class QRScannerView extends PureComponent<Props> {
  static defaultProps = {
    maskColor: '#0000004D',
    cornerColor: '#22ff00',
    borderColor: '#000000',
    rectHeight: 200,
    rectWidth: 200,
    borderWidth: 0,
    cornerBorderWidth: 4,
    cornerBorderLength: 20,
    isLoading: false,
    cornerOffsetSize: 0,
    isCornerOffset: false,
    bottomMenuHeight: 0,
    scanBarAnimateTime: 2500,
    scanBarColor: '#22ff00',
    scanBarImage: null,
    scanBarHeight: 1.5,
    scanBarMargin: 6,
    hintText: '将二维码/条码放入框内，即可自动扫描',
    permissionDialogTitle: '允许使用相机',
    permissionDialogMessage: '我们需要您允许使用相机',
    hintTextStyle: { color: '#fff', fontSize: 14, backgroundColor: 'transparent' },
    hintTextPosition: 130,
    isShowScanBar: true,
    bottomMenuStyle: {},
    renderTopBarView: () => {},
    renderBottomMenuView: () => {},
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Camera
          onBarCodeRead={this.props.onScanResultReceived}
          style={{ flex: 1 }}
          permissionDialogTitle={this.props.permissionDialogTitle}
          permissionDialogMessage={this.props.permissionDialogMessage}
        >
          {/* 绘制顶部标题栏组件 */}
          {this.props.renderTopBarView()}

          {/* 绘制扫描遮罩 */}
          <QRScannerRectView
            maskColor={this.props.maskColor}
            cornerColor={this.props.cornerColor}
            borderColor={this.props.borderColor}
            rectHeight={this.props.rectHeight}
            rectWidth={this.props.rectWidth}
            borderWidth={this.props.borderWidth}
            cornerBorderWidth={this.props.cornerBorderWidth}
            cornerBorderLength={this.props.cornerBorderLength}
            isLoading={this.props.isLoading}
            cornerOffsetSize={this.props.cornerOffsetSize}
            isCornerOffset={this.props.isCornerOffset}
            bottomMenuHeight={this.props.bottomMenuHeight}
            scanBarAnimateTime={this.props.scanBarAnimateTime}
            scanBarColor={this.props.scanBarColor}
            scanBarHeight={this.props.scanBarHeight}
            scanBarMargin={this.props.scanBarMargin}
            hintText={this.props.hintText}
            hintTextStyle={this.props.hintTextStyle}
            scanBarImage={this.props.scanBarImage}
            hintTextPosition={this.props.hintTextPosition}
            isShowScanBar={this.props.isShowScanBar}
          />

          {/* 绘制底部操作栏 */}
          <View style={[styles.buttonsContainer, this.props.bottomMenuStyle]}>
            {this.props.renderBottomMenuView()}
          </View>
        </Camera>
      </View>
    );
  }
}
