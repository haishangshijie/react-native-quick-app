import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  AsyncStorage,
  ToastAndroid,
  TouchableOpacity
} from "react-native";
import V from "../Variables";
import BackIcon from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: V.V.primaryColor
  },
  section: {
    alignItems: "center",
    justifyContent: "center"
  },
  inputView: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  input: {
    width: 100,
    height: 35,
    fontSize: 14,
    color: "#333",
    borderRadius: 5,
    backgroundColor: "white",
    marginBottom: 20
  },
  button: {
    width: 200,
    height: 34,
    borderRadius: 5,
    justifyContent: "center",
    backgroundColor: "green"
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    textAlign: "center"
  },
  text: {
    height: 40,
    fontSize: 14,
    color: "#333",
    paddingHorizontal: 10
  }
});

type Props = {};
export default class Storage extends Component<Props> {
  static navigationOptions = {
    title: "存储数据",
    gesturesEnabled: true,
    headerBackImage: <BackIcon size={30} name="arrow-back" color="black" />
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      key1: "",
      value1: "",
      key2: "",
      value2: "",
      key3: ""
    };
  }

  handleKey1Change = text => {
    this.setState({ key1: text });
  };

  handleKey2Change = text => {
    this.setState({ key2: text });
  };

  handleKey3Change = text => {
    this.setState({ key3: text });
  };

  handleValue1Change = text => {
    this.setState({ value1: text });
  };

  handleSaveClick = async () => {
    const { key1, value1 } = this.state;
    if (!key1 || !value1) {
      ToastAndroid.show("请输入参数", 1);
    }

    try {
      await AsyncStorage.setItem(key1, value1, error => {
        if (!error) {
          ToastAndroid.show("保存成功!", 1);
        }
      });
    } catch (error) {
      ToastAndroid.show(`保存失败,请稍后重试! error ${error}`, 1);
    }
  };

  handleQueryClick = async () => {
    const { key2 } = this.state;
    if (!key2) {
      ToastAndroid.show("请输入参数", 1);
    }

    try {
      await AsyncStorage.getItem(key2, (error, result) => {
        console.log(`get error ${error} result ${result}`);
        if (!result) {
          ToastAndroid.show(`获取失败,没有该key`, 1);
          this.setState({ value2: "" });
        } else {
          this.setState({ value2: result });
        }
      });
    } catch (error) {
      ToastAndroid.show(`获取失败, error ${error}`, 1);
      this.setState({ value2: "" });
    }
  };

  handleDeleteClick = async () => {
    const { key3 } = this.state;
    if (!key3) {
      ToastAndroid.show("请输入参数", 1);
    }

    try {
      await AsyncStorage.removeItem(key3, error => {
        ToastAndroid.show(`删除成功!`, 1);
      });
    } catch (error) {
      ToastAndroid.show(`删除失败, error ${error}`, 1);
    }
  };

  handleClearClick = async () => {
    try {
      await AsyncStorage.clear(error => {
        ToastAndroid.show(`清空成功!`, 1);
      });
    } catch (error) {
      ToastAndroid.show(`清空失败, error ${error}`, 1);
    }
  };

  render() {
    const { key1, key2, key3, value1, value2 } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <View style={styles.inputView}>
            <Text style={styles.text}>key</Text>
            <TextInput
              style={styles.input}
              onChangeText={this.handleKey1Change}
            >
              {key1}
            </TextInput>
            <Text style={styles.text}>value</Text>
            <TextInput
              style={styles.input}
              onChangeText={this.handleValue1Change}
            >
              {value1}
            </TextInput>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={this.handleSaveClick}
          >
            <Text style={styles.buttonText}>存储数据</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <View style={styles.inputView}>
            <Text style={styles.text}>key</Text>
            <TextInput
              style={styles.input}
              onChangeText={this.handleKey2Change}
            >
              {key2}
            </TextInput>
            <Text style={styles.text}>value</Text>
            <Text style={[styles.text, { width: 100 }]}>{value2}</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={this.handleQueryClick}
          >
            <Text style={styles.buttonText}>查询数据</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <View style={styles.inputView}>
            <Text style={styles.text}>key</Text>
            <TextInput
              style={styles.input}
              onChangeText={this.handleKey3Change}
            >
              {key3}
            </TextInput>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={this.handleDeleteClick}
          >
            <Text style={styles.buttonText}>删除数据</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.button, { marginTop: 30 }]}
          onPress={this.handleClearClick}
        >
          <Text style={styles.buttonText}>清空数据</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
