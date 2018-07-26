import React, { Component } from 'react';
import { 
  Button, 
  StyleSheet, 
  Text,
  View 
} from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    header: null
  };
  
  render() {
    return (
      <View style={style.container}>
        <Text>Home Screen</Text>
        <View style={style.buttonNavigation}>
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  buttonNavigation: {
    padding: 10
  }
});