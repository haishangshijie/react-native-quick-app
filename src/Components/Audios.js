import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  ToastAndroid
} from "react-native";
import Video from "react-native-video";
import { AudioRecorder, AudioUtils } from "react-native-audio";
import BackIcon from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2b608a"
  },
  controls: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  progressText: {
    paddingTop: 50,
    fontSize: 50,
    color: "#fff"
  },
  button: {
    padding: 20
  },
  disabledButtonText: {
    color: "#eee"
  },
  buttonText: {
    fontSize: 20,
    color: "#fff"
  },
  activeButtonText: {
    fontSize: 20,
    color: "green"
  }
});

export default class Audios extends Component {
  static navigationOptions = {
    title: "音频",
    headerBackImage: <BackIcon size={30} name="arrow-back" color="black" />
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      currentTime: 0.0,
      recording: false,
      paused: false,
      stoppedRecording: false,
      finished: false,
      audioPath: AudioUtils.DocumentDirectoryPath + "/test.aac",
      hasPermission: undefined,
      audioPaused: true
    };
  }

  componentDidMount() {
    AudioRecorder.requestAuthorization().then(isAuthorised => {
      console.log("audio Permission ", isAuthorised);
      this.setState({ hasPermission: isAuthorised });

      if (!isAuthorised) return;

      this.prepareRecordingPath(this.state.audioPath);

      AudioRecorder.onProgress = data => {
        this.setState({ currentTime: Math.floor(data.currentTime) });
      };

      AudioRecorder.onFinished = data => {
        // Android callback comes in the form of a promise instead.
        if (Platform.OS === "ios") {
          this._finishRecording(
            data.status === "OK",
            data.audioFileURL,
            data.audioFileSize
          );
        }
      };
    });
  }

  prepareRecordingPath(audioPath) {
    console.log("prepareRecordingPath ", audioPath);
    AudioRecorder.prepareRecordingAtPath(audioPath, {
      SampleRate: 44100,
      Channels: 1,
      AudioQuality: "Low",
      AudioEncoding: "aac",
      AudioEncodingBitRate: 32000
    });
  }

  _renderButton(title, onPress, active) {
    var style = active ? styles.activeButtonText : styles.buttonText;

    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={style}>{title}</Text>
      </TouchableOpacity>
    );
  }

  _renderPauseButton(onPress, active) {
    var style = active ? styles.activeButtonText : styles.buttonText;
    var title = this.state.paused ? "继续录音" : "暂停录音";
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={style}>{title}</Text>
      </TouchableOpacity>
    );
  }

  async _pause() {
    if (!this.state.recording) {
      ToastAndroid.show("Can't pause, not recording!", 1);
      return;
    }

    try {
      const filePath = await AudioRecorder.pauseRecording();
      this.setState({ paused: true });
    } catch (error) {
      console.error(error);
    }
  }

  async _resume() {
    if (!this.state.paused) {
      ToastAndroid.show("Can't resume, not paused!", 1);
      return;
    }

    try {
      await AudioRecorder.resumeRecording();
      this.setState({ paused: false });
    } catch (error) {
      console.error(error);
    }
  }

  async _stop() {
    if (!this.state.recording) {
      ToastAndroid.show("Can't stop, not recording!", 1);
      return;
    }

    this.setState({ stoppedRecording: true, recording: false, paused: false });

    try {
      const filePath = await AudioRecorder.stopRecording();

      if (Platform.OS === "android") {
        this._finishRecording(true, filePath);
      }
      return filePath;
    } catch (error) {
      console.error(error);
    }
  }

  async _play() {
    if (this.state.recording) {
      await this._stop();
    }

    // These timeouts are a hacky workaround for some issues with react-native-sound.
    // See https://github.com/zmxv/react-native-sound/issues/89.
    this.timer_out = setTimeout(() => {
      console.log("播放录音");
      this.video.seek(0);
      this.setState({ audioPaused: false });
      this.timer_out && clearTimeout(this.timer_out);

      this.timer_in = setTimeout(() => {
        this.setState({ audioPaused: false });
        this.timer_in && clearTimeout(this.timer_in);
      }, 100);
    }, 100);
  }

  async _record() {
    if (this.state.recording) {
      ToastAndroid.show("Already recording!", 1);
      return;
    }

    if (!this.state.hasPermission) {
      ToastAndroid.show("Can't record, no permission granted!", 1);
      return;
    }

    console.log("prepareRecordingPath ", this.state.audioPath);
    if (this.state.stoppedRecording) {
      this.prepareRecordingPath(this.state.audioPath);
    }
    console.log("prepareRecordingPath ", this.state.audioPath);

    this.setState({ recording: true, paused: false });

    console.log("recording...");
    try {
      const filePath = await AudioRecorder.startRecording();
    } catch (error) {
      console.log("recording error ", error);
      console.error(error);
    }
  }

  _finishRecording(didSucceed, filePath, fileSize) {
    this.setState({ finished: didSucceed });
    console.log(
      `Finished recording of duration ${
        this.state.currentTime
      } seconds at path: ${filePath} and size of ${fileSize || 0} bytes`
    );
  }

  onAudioLoad = data => {
    console.log(data.duration + "xxx");
  };

  onAudioProgress = data => {
    console.log(data.currentTime + "hhh");
    this.setState({ currentTime: parseInt(data.currentTime) });
  };

  onAudioEnd = () => {
    this.setState({ audioPaused: true });
    this.video.seek(0);
  };

  onAudioBecomingNoisy = () => {
    this.setState({ audioPaused: true });
  };

  onAudioFocusChanged = (event: { hasAudioFocus: boolean }) => {
    this.setState({ audioPaused: !event.hasAudioFocus });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.controls}>
          {this._renderButton(
            "开始录音",
            () => {
              this._record();
            },
            this.state.recording
          )}
          {this._renderPauseButton(() => {
            this.state.paused ? this._resume() : this._pause();
          })}
          {this._renderButton("停止录音", () => {
            this._stop();
          })}
          {this._renderButton("播放录音", () => {
            this._play();
          })}
          {/* {this._renderButton("PAUSE", () => {this._pause()} )} */}

          <Text style={styles.progressText}>{this.state.currentTime}s</Text>
          {this.state.stoppedRecording &&
          !this.state.recording &&
          !this.state.paused ? (
            <Video
              ref={(ref: Video) => {
                this.video = ref;
              }}
              source={{ uri: this.state.audioPath }}
              paused={this.state.audioPaused}
              onLoad={this.onAudioLoad}
              onProgress={this.onAudioProgress}
              onEnd={this.onAudioEnd}
              onAudioBecomingNoisy={this.onAudioBecomingNoisy}
              onAudioFocusChanged={this.onAudioFocusChanged}
              repeat={false}
            />
          ) : (
            false
          )}
        </View>
      </View>
    );
  }
}
