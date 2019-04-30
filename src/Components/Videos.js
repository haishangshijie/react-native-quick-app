/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Slider,
  Button,
  BackHandler,
  TouchableOpacity
} from "react-native";
import Video from "react-native-video";
import Icon from "react-native-vector-icons/FontAwesome";
import V from "../Variables";
import BackIcon from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "black"
  },
  textStyle: {
    paddingLeft: 10,
    paddingTop: 25,
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  btnStyle: {
    paddingRight: 10,
    paddingTop: 25,
    justifyContent: "flex-end",
    flexDirection: "row"
  },
  fullScreen: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  controls: {
    backgroundColor: "transparent",
    borderRadius: 5,
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20
  },
  trackingControls: {
    backgroundColor: "transparent",
    marginBottom: 20
  },
  progress: {
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: "row",
    borderRadius: 3,
    overflow: "hidden"
  },
  innerProgressCompleted: {
    height: 5,
    backgroundColor: "#cccccc"
  },
  innerProgressRemaining: {
    height: 5,
    backgroundColor: "#2C2C2C"
  },
  generalControls: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 4,
    overflow: "hidden",
    marginVertical: 10
  },
  rateControl: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  volumeControl: {
    fontSize: 14,
    color: "#fff",
    // flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  resizeModeControl: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  controlOption: {
    alignSelf: "center",
    fontSize: 14,
    color: "white",
    paddingLeft: 2,
    paddingRight: 2
  }
});

type Props = {};
export default class Videos extends Component<Props> {
  static navigationOptions = {
    title: "视频",
    gesturesEnabled: true,
    headerBackImage: <BackIcon size={30} name="arrow-back" color="black" />
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      rate: 1,
      volume: 1,
      muted: false,
      resizeMode: "contain",
      duration: 0.0,
      currentTime: 0.0,
      paused: true
    };
  }

  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackAndroid);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackAndroid);
  }

  onBackAndroid = () => {
    this.props.navigation.goBack();
    return true;
  };

  formatTime(second) {
    let h = 0,
      i = 0,
      s = parseInt(second);
    if (s > 60) {
      i = parseInt(s / 60);
      s = parseInt(s % 60);
    }
    // 补零
    let zero = function(v) {
      return v >> 0 < 10 ? "0" + v : v;
    };
    console.log([zero(h), zero(i), zero(s)].join(":"));
    // return [zero(h), zero(i), zero(s)].join(":");
    return [zero(h), zero(i), zero(s)].join(":");
  }

  onLoad = data => {
    this.setState({ duration: data.duration });
    console.log(data.duration + "xxx");
  };

  onProgress = data => {
    this.setState({ currentTime: data.currentTime });
    console.log(data.currentTime + "hhh");
  };

  onEnd = () => {
    this.setState({ paused: true });
    this.video.seek(0);
  };

  handleSliderSwipe = value => {
    const second = value * parseFloat(this.state.duration);
    console.log(`slider value ${value} , second ${second}`);
    this.video.seek(second);
    this.setState({ paused: false });
  };

  onAudioBecomingNoisy = () => {
    this.setState({ paused: true });
  };

  onAudioFocusChanged = (event: { hasAudioFocus: boolean }) => {
    this.setState({ paused: !event.hasAudioFocus });
  };

  getCurrentTimePercentage() {
    if (this.state.currentTime > 0) {
      return (
        parseFloat(this.state.currentTime) / parseFloat(this.state.duration)
      );
    }
    return 0;
  }

  playVideo = () => {
    if (this.state.currentTime === 0) {
      this.timer_out = setTimeout(() => {
        console.log("播放视频");
        this.video.seek(0);
        this.setState({ paused: false });
        this.timer_out && clearTimeout(this.timer_out);

        this.timer_in = setTimeout(() => {
          this.setState({ paused: false });
          this.timer_in && clearTimeout(this.timer_in);
        }, 100);
      }, 100);
    } else {
      this.setState({ paused: !this.state.paused });
    }
  };

  renderRateControl(rate) {
    const isSelected = this.state.rate === rate;

    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({ rate });
        }}
      >
        <Text
          style={[
            styles.controlOption,
            { color: isSelected ? "green" : "white" }
          ]}
        >
          {rate}x
        </Text>
      </TouchableOpacity>
    );
  }

  renderResizeModeControl(resizeMode) {
    const isSelected = this.state.resizeMode === resizeMode;

    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({ resizeMode });
        }}
      >
        <Text
          style={[
            styles.controlOption,
            { color: isSelected ? "green" : "white" }
          ]}
        >
          {resizeMode}
        </Text>
      </TouchableOpacity>
    );
  }

  renderVolumeControl(volume) {
    const isSelected = this.state.volume === volume;

    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({ volume });
        }}
      >
        <Text
          style={[
            styles.controlOption,
            { color: isSelected ? "green" : "white" }
          ]}
        >
          {volume * 100}%
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const flexCompleted = this.getCurrentTimePercentage();
    const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.fullScreen}
          activeOpacity={1}
          onPress={this.playVideo}
        >
          <Video
            ref={(ref: Video) => {
              this.video = ref;
            }}
            /* For ExoPlayer */
            // source={{
            //   uri:
            //     "https://gslb.miaopai.com/stream/HNkFfNMuhjRzDd-q6j9qycf54OaKqInVMu0YhQ__.mp4?ssig=bbabfd7684cae53660dc2d4c2103984e&time_stamp=1533631567740&cookie_id=&vend=1&os=3&partner=1&platform=2&cookie_id=&refer=miaopai&scid=HNkFfNMuhjRzDd-q6j9qycf54OaKqInVMu0YhQ__",
            //   type: "mpd"
            // }}
            source={require("../assets/background.mp4")}
            // source={{ uri: "/sdcard/RPK/background.mp4" }}
            style={styles.fullScreen}
            rate={this.state.rate}
            paused={this.state.paused}
            volume={this.state.volume}
            muted={this.state.muted}
            resizeMode={this.state.resizeMode}
            onLoad={this.onLoad}
            onProgress={this.onProgress}
            onEnd={this.onEnd}
            onAudioBecomingNoisy={this.onAudioBecomingNoisy}
            onAudioFocusChanged={this.onAudioFocusChanged}
            repeat={false}
          />
        </TouchableOpacity>
        {/* <View style={styles.textStyle}>
          <Text style={styles.volumeControl}>
            {this.formatTime(this.state.duration - this.state.currentTime)}
          </Text>

          <Button
            style={styles.btnStyle}
            title={"播放/暂停"}
            color={"#73808080"}
            onPress={() => {
              this.setState({ paused: !this.state.paused });
            }}
          />
        </View> */}

        <View style={styles.controls}>
          <View style={styles.generalControls}>
            <View style={styles.rateControl}>
              {this.renderRateControl(0.25)}
              {this.renderRateControl(0.5)}
              {this.renderRateControl(1.0)}
              {this.renderRateControl(1.5)}
              {this.renderRateControl(2.0)}
            </View>

            <View style={styles.volumeControl}>
              {this.renderVolumeControl(0.5)}
              {this.renderVolumeControl(1)}
              {this.renderVolumeControl(1.5)}
            </View>

            <View style={styles.resizeModeControl}>
              {this.renderResizeModeControl("cover")}
              {this.renderResizeModeControl("contain")}
              {this.renderResizeModeControl("stretch")}
            </View>
          </View>

          <View style={styles.trackingControls}>
            <View style={styles.progress}>
              <TouchableOpacity onPress={this.playVideo}>
                <Icon
                  color="white"
                  size={20}
                  name={this.state.paused ? "play" : "pause"}
                  // style={{ marginRight: 5 }}
                />
              </TouchableOpacity>
              <Slider
                style={styles.progress}
                onTintColor="green"
                maximumTrackTintColor="grey"
                value={flexCompleted}
                onSlidingComplete={this.handleSliderSwipe}
              />
              <Text style={styles.volumeControl}>
                {this.formatTime(this.state.duration - this.state.currentTime)}
              </Text>
              {/* <View
                style={[styles.innerProgressCompleted, { flex: flexCompleted }]}
              />
              <View
                style={[styles.innerProgressRemaining, { flex: flexRemaining }]}
              /> */}
            </View>
          </View>
        </View>
      </View>
    );
  }
}
