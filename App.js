
import * as React from 'react';
import { StatusBar, View, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class App extends React.Component {
  state = {
    inputValue: ''
  };

  changeText = value => {
    this.setState({
      inputValue: value,
      todos: [],
    })
  }

  addItem = () => {
    if (this.state.inputValue != ''){
      this.setState( prevState => {
        const newToDo = {
          title: this.state.inputValue,
          createdAt: Date.now(),
        };

        var todos = this.state.todos.concat(newToDo);

        this.setState({ todos })
      })
    }
  }

  render() {
    const todos = this.state.todos.reverse().map((todo, key) =>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
      <TouchableOpacity style={{
        width: 20,
        height: 20,
        borderRadius: 20,
        borderWidth: 30,
        borderColor: 'white',
        margin: 15
      }}>
    )

    return (
        <LinearGradient colors={['#667eea', '#764ba2']} style={{ flex:1 }}>
          <StatusBar barStyle="light-content" />
          <View>
            <TextInput
              style={styles.input}
              placeholder="Type here to add a to do."
              placeholderTextColor={'#fff'}
              onChangeText={this.changeText}
              value={this.state.inputValue}
              multiline={true}
              autoCapitalize="sentences"
              underlineColorAndroid="transparent"
              selectionColor={'white'}
              maxLength={30}
              returnKeyType="done"
              autoCorrect={false}
              blurOnSubmit={true}/>
          </View>
        </LinearGradient>
    );
  }
}

const styles = {
  input:
    {
      marginTop: 30,
    paddingTop: 10,
    paddingRight: 15,
    paddingLeft: 15,
    fontSize: 34,
    color: 'white',
    fontWeight: '500'
  }
}
