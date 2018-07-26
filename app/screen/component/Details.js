import React, { Component } from 'react';
import { 
  Button, 
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Details extends Component {
  static navigationOptions = {
    title: 'Details',
    headerRight: (
      <View style={{ padding: 10 }}>
        <Button 
          title="Shop"
          onPress={() => {}}
        />
      </View>
    )
  };

  render() {
    return (
      <View style={style.container}>
        <Text>Details Screen</Text>
        <View style={style.buttonNavigation}>
          <Button
            title="Go to Details... again"
            onPress={() => this.props.navigation.push('Details')}
          />
        </View>
        <View style={style.buttonNavigation}>
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
        <View style={style.buttonNavigation}>
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
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