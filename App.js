import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class HelloWorldApp extends Component {
  render() {
    let pic = {
  uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
};
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
        <Text>Hello, world!</Text>
        <Text>Hello, world!</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
      </View>
    );
  }
}
export default HelloWorldApp
