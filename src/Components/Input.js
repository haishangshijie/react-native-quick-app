import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  rowView: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  checkboxView: {
    marginBottom: 5
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center"
  },
  input: {
    width: 200,
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "#ccc"
  },
  text: {
    color: "#333",
    fontSize: 16,
    marginRight: 10
  }
});

type Props = {};
export default class Input extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      gender: 0,
      likes: []
    };
  }

  handleGenderChange = gender => () => {
    this.setState({ gender });
  };

  handleLikesChange = like => () => {
    if (this.state.likes.indexOf(like) === -1) {
      const likes = this.state.likes;
      likes.push(like);
      this.setState({ likes });
    } else {
      const likes = this.state.likes;
      likes.splice(this.state.likes.indexOf(like), 1);
      this.setState({ likes });
    }
  };

  render() {
    const { gender, likes } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.rowView}>
          <Text style={styles.text}>Button</Text>
          <Button title="按钮" />
        </View>
        <View style={styles.rowView}>
          <Text style={styles.text}>爱好:</Text>
          <View style={styles.checkboxView}>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={this.handleLikesChange("food")}
            >
              <Icon
                style={{ padding: 5 }}
                name={
                  likes.indexOf("food") === -1
                    ? "check-box-outline-blank"
                    : "check-box"
                }
                size={20}
                color={likes.indexOf("food") === -1 ? "grey" : "green"}
              />
              <Text style={styles.text}>吃饭</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={this.handleLikesChange("sleep")}
            >
              <Icon
                style={{ padding: 5 }}
                name={
                  likes.indexOf("sleep") === -1
                    ? "check-box-outline-blank"
                    : "check-box"
                }
                size={20}
                color={likes.indexOf("sleep") === -1 ? "grey" : "green"}
              />
              <Text style={styles.text}>睡觉</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rowView}>
          <Text style={styles.text}>性别:</Text>
          <View style={styles.checkboxView}>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={this.handleGenderChange(1)}
            >
              <Icon
                style={{ padding: 5 }}
                name={
                  gender === 1
                    ? "radio-button-checked"
                    : "radio-button-unchecked"
                }
                size={20}
                color={gender === 1 ? "green" : "grey"}
              />
              <Text style={styles.text}>男</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={this.handleGenderChange(2)}
            >
              <Icon
                style={{ padding: 5 }}
                name={
                  gender === 2
                    ? "radio-button-checked"
                    : "radio-button-unchecked"
                }
                size={20}
                color={gender === 2 ? "green" : "grey"}
              />
              <Text style={styles.text}>女</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={this.handleGenderChange(3)}
            >
              <Icon
                style={{ padding: 5 }}
                name={
                  gender === 3
                    ? "radio-button-checked"
                    : "radio-button-unchecked"
                }
                size={20}
                color={gender === 3 ? "green" : "grey"}
              />
              <Text style={styles.text}>保密</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rowView}>
          <Text style={styles.text}>Text</Text>
          <TextInput
            style={styles.input}
            keyboardType="default"
            placeholder="可以输入汉字英文数字"
          />
        </View>
        <View style={styles.rowView}>
          <Text style={styles.text}>这是email输入框</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder="可以输入email"
          />
        </View>
        <View style={styles.rowView}>
          <Text style={styles.text}>这是数字输入框</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="只能输入数字哦"
          />
        </View>
        <View style={styles.rowView}>
          <Text style={styles.text}>这是password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="*********"
          />
        </View>
      </View>
    );
  }
}
