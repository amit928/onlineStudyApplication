import { BackHandler, Text, View } from 'react-native'
import React, { Component } from 'react'

export default class Dashboard extends Component {

    componentDidMount = () => {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress = () => {
        BackHandler.exitApp()
        return true
    };

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }


  render() {
    return (
      <View>
        <Text>Dashboard</Text>
      </View>
    )
  }
}