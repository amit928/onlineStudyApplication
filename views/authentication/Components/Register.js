import { Text, View, Image, ImageBackground, ScrollView, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { HEIGHT, WIDTH } from '../../common/Constants';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';

export default class Register extends Component {
  render() {
    return (
      <ScrollView style={{ height: HEIGHT }}>
        <ImageBackground source={require('../../images/loginnewbg.jpg')} style={{ height: HEIGHT }}>
          <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 1, y: 1.4 }} colors={['#ffffff', '#0054b7', '#000e93']} style={{ flex: 1, }}>
            <View style={{ width: "120%", height: "35%" }}>
              <Image source={require('../../images/loginImage1.png')} style={{ height: "85%", width: "100%" }} />
            </View>
            <View>
              <View style={{ width: "80%", display: "flex", alignSelf: "center", justifyContent: "center" }}>
                <Text style={{ fontSize: 30, color: "#f9a25d", fontWeight: "900", textAlign: "center", fontFamily: "monospace" }}>LEARNING EDGE</Text>
                <Text style={{ fontSize: 20, color: "#fff", fontWeight: "600", textAlign: "center", marginBottom: 30 }}>Register To Your Account</Text>
                <View style={{ width: "100%", padding: 5, borderRadius: 7, borderRadius: 12, backgroundColor: "#fff", paddingHorizontal: 20, borderColor: "#9bc8fa", borderWidth: 0.8, display: "flex", flexDirection: "row", alignItems: "center" }}>
                  <Entypo name="user" size={22} color="#000e93" />
                  <TextInput
                    placeholder='Username'
                    placeholderTextColor={'#000e93'}

                    style={{ width: "90%", padding: 8, color: "#000e93", fontSize: 17, textAlign: "center", fontWeight: "500" }}
                  />
                </View>

                <View style={{ width: "100%", padding: 5, borderRadius: 7, borderRadius: 12, backgroundColor: "#fff", paddingHorizontal: 20, borderColor: "#9bc8fa", borderWidth: 0.8, display: "flex", flexDirection: "row", alignItems: "center", marginVertical: 20 }}>
                  <Entypo name="phone" size={22} color="#000e93" />
                  <TextInput
                    placeholder='Phone number'
                    placeholderTextColor={'#000e93'}
      keyboardType="phone-pad"
                    style={{ width: "90%", padding: 8, color: "#000e93", fontSize: 17, textAlign: "center", fontWeight: "500" }}
                  />
                </View>

                <View style={{ width: "100%", padding: 5, borderRadius: 7, borderRadius: 12, backgroundColor: "#fff", paddingHorizontal: 20, borderColor: "#9bc8fa", borderWidth: 0.8, display: "flex", flexDirection: "row", alignItems: "center" }}>
                  <Entypo name="mail" size={22} color="#000e93" />
                  <TextInput
                    placeholder='Email Address'
                    placeholderTextColor={'#000e93'}
                    keyboardType="email-address"
                    style={{ width: "90%", padding: 8, color: "#000e93", fontSize: 17, textAlign: "center", fontWeight: "500" }}
                  />
                </View>

                <View style={{ width: "100%", padding: 5, borderRadius: 7, borderRadius: 12, backgroundColor: "#fff", paddingHorizontal: 20, borderColor: "#9bc8fa", borderWidth: 0.8, display: "flex", flexDirection: "row", alignItems: "center", marginVertical: 20 }}>
                  <Entypo name="lock" size={22} color="#000e93" />
                  <TextInput
                    placeholder='Password'
                    placeholderTextColor={'#000e93'}
                    secureTextEntry
                    style={{ width: "90%", alignSelf: "center", padding: 8, color: "#000e93", fontSize: 17, textAlign: "center", fontWeight: "500" }}
                  />
                </View>

                <TouchableOpacity style={{ width: "100%", backgroundColor: "#00aae5", paddingVertical: 15, borderRadius: 12, display: "flex", justifyContent: "center" }}>
                  <Text style={{ fontSize: 18, fontWeight: "800", fontFamily: "monospace", color: "#fff", textAlign: "center", letterSpacing: 1 }}>REGISTER</Text>
                </TouchableOpacity>
              </View>
              <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: 15 }}>
                <Text style={{ color: "#fff", fontSize: 17 }}>Already Have An Account ?</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('login')}>
                  <Text style={{ color: "#f9a25d", fontSize: 17, marginLeft: 5 }}>
                    Sign In
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>

        </ImageBackground>
      </ScrollView>
    )
  }
}