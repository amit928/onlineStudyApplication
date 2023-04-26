import { Text, View, Image, ImageBackground, ScrollView, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { HEIGHT, WIDTH } from '../../common/Constants';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import CommonDropdown from '../../common/CommonDropdown';

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      schoolDropdown: false,
      subjectDropdown: false
    }
  }
  render() {
    return (
      <ScrollView style={{ height: HEIGHT }}>
        <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 1, y: 1.4 }} colors={['#ffffff', '#0054b7', '#000e93']} style={{ height: HEIGHT }}>
          <View style={{ width: "100%", height: 250 }}>
            <Image source={require('../../images/loginImage1.png')} style={{ height: "85%", width: "100%" }} />
          </View>
          <ScrollView style={{ marginTop: -20 }}>
            <View style={{ width: "75%", display: "flex", alignSelf: "center", justifyContent: "center" }}>
              <Text style={{ fontSize: 30, color: "#f9a25d", fontWeight: "900", textAlign: "center", fontFamily: "monospace" }}>LEARNING EDGE</Text>
              <Text style={{ fontSize: 20, color: "#fff", fontWeight: "600", textAlign: "center", marginBottom: 30 }}>Register To Your Account</Text>

              <View style={{ ...styles.textfields, marginBottom: 20 }}>
                <TextInput
                  placeholder='Name'
                  placeholderTextColor={'#000e93'}
                  keyboardType="default"
                  style={styles.textinput}
                />
                <Entypo name="user" size={22} color="#000e93" />
              </View>

              <View style={styles.textfields}>
                <TextInput
                  placeholder='Email Address'
                  placeholderTextColor={'#000e93'}
                  keyboardType="email-address"
                  style={styles.textinput}
                />
                <Entypo name="mail" size={22} color="#000e93" />
              </View>

              <View style={{ ...styles.textfields, marginVertical: 20 }}>
                <TextInput
                  placeholder='Phone number'
                  placeholderTextColor={'#000e93'}
                  keyboardType="phone-pad"
                  style={styles.textinput}
                />
                <Entypo name="phone" size={22} color="#000e93" />
              </View>

              <View style={{ zIndex: 3 }}>
                <CommonDropdown label={'Schools'} list={['DPS']} show={this.state.schoolDropdown} onClick={() => { this.setState({ schoolDropdown: !this.state.schoolDropdown,subjectDropdown: false }) }} />
              </View>

              <View style={{ marginVertical: 20, zIndex: 2 }}>
                <CommonDropdown label={'Subjects'} list={['Mathematics', 'Physics', 'Biology', 'English', 'Chemistry']} show={this.state.subjectDropdown} onClick={() => { this.setState({ subjectDropdown: !this.state.subjectDropdown, schoolDropdown: false }) }} />
              </View>

              <View style={styles.textfields}>
                <TextInput
                  placeholder='Password'
                  placeholderTextColor={'#000e93'}
                  secureTextEntry
                  style={styles.textinput}
                />
                <Entypo name="lock" size={22} color="#000e93" />
              </View>

              <View style={{ ...styles.textfields, marginVertical: 20 }}>
                <TextInput
                  placeholder='Confirm Password'
                  placeholderTextColor={'#000e93'}
                  secureTextEntry
                  style={styles.textinput}
                />
                <Entypo name="lock" size={22} color="#000e93" />

              </View>

              <TouchableOpacity style={{ width: "100%", backgroundColor: "#00aae5", paddingVertical: 13, borderRadius: 12, display: "flex", justifyContent: "center", elevation: 5 }}>
                <Text style={{ fontSize: 16, fontWeight: "800", fontFamily: "monospace", color: "#fff", textAlign: "center", letterSpacing: 1 }}>REGISTER</Text>
              </TouchableOpacity>
            </View>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginVertical: 15, marginBottom:25, zIndex: -1 }}>
              <Text style={{ color: "#fff", fontSize: 17 }}>Already Have An Account ?</Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('login')}>
                <Text style={{ color: "#f9a25d", fontSize: 17, marginLeft: 5 }}>
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </LinearGradient>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  textfields: { width: "100%", padding: 2, borderRadius: 7, borderRadius: 12, backgroundColor: "#fff", paddingHorizontal: 15, borderColor: "#9bc8fa", borderWidth: 0.8, display: "flex", flexDirection: "row", alignItems: "center", zIndex: 1 },
  textinput: { width: "90%", padding: 8, color: "#000e93", fontSize: 15, textAlign: "left", fontWeight: "500" }
})

export default Register;