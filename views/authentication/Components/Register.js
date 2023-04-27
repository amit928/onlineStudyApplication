import { Text, View, Image, ImageBackground, ScrollView, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import { HEIGHT, WIDTH } from '../../common/Constants';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import CommonDropdown from '../../common/CommonDropdown';
import { connect } from 'react-redux';
import { getClasses, getSchools, onStudentRegistration } from '../action';
import { handleClassValue, handleSchoolValue } from '../../common/Utils';

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: "",
      phoneNo: "",
      school: "",
      classSl: "",
      password: "",
      conf_password: ""
    }
  }
  componentDidMount = () => {
    this.props.getSchools();
    this.props.getClasses();
  }

  on_StudentRegistration = () => {
    const { name, email, phoneNo, password, school, classSl, conf_password } = this.state
    if (name && email && phoneNo && password && school && classSl && conf_password) {
      if (password == conf_password) {
        if (!phoneNo.includes("+") && phoneNo.length == 10) {
          this.props.onStudentRegistration({
            "STUDENT_NAME": name,
            "SCHOOL_SL": school,
            "CLASS_SL": classSl,
            "MOBILE_NO": phoneNo,
            "EMAIL_ID": email,
            "STUDENT_PASSWORD": password
          })
        }
        else {
          alert("Please provide a valid mobile no.")
        }

      }
      else {
        alert("Password doesn't matched")
      }
    }
    else {
      alert("Please Fill The Input Field")
    }
  }

  render() {
    return (
      <ScrollView style={{ height: HEIGHT }}>
        <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 1, y: 1.4 }} colors={['#ffffff', '#0054b7', '#000e93']} style={{ height: HEIGHT }}>
          <View style={{ width: "100%", height: 250 }}>
            <Image source={require('../../images/loginImage1.png')} style={{ height: "85%", width: "100%" }} />
          </View>
          <ScrollView style={{ marginTop: -15 }}>
            <View style={{ width: "75%", display: "flex", alignSelf: "center", justifyContent: "center" }}>
              <Text style={{ fontSize: 30, color: "#fff", fontWeight: "800", textAlign: "center", marginBottom: 20, elevation: 5 }}>Sign Up</Text>

              <View style={{ ...styles.textfields, marginBottom: 15 }}>
                <TextInput
                  placeholder='Name'
                  placeholderTextColor={'#000e93'}
                  keyboardType="default"
                  style={styles.textinput}
                  onChangeText={(text) => this.setState({ name: text })}
                />
                <Entypo name="user" size={22} color="#000e93" />
              </View>

              <View style={styles.textfields}>
                <TextInput
                  placeholder='Email Address'
                  placeholderTextColor={'#000e93'}
                  keyboardType="email-address"
                  style={styles.textinput}
                  onChangeText={(text) => this.setState({ email: text })}
                />
                <Entypo name="mail" size={22} color="#000e93" />
              </View>

              <View style={{ ...styles.textfields, marginVertical: 15 }}>
                <TextInput
                  placeholder='Phone number'
                  placeholderTextColor={'#000e93'}
                  keyboardType="phone-pad"
                  style={styles.textinput}
                  onChangeText={(text) => this.setState({ phoneNo: text })}
                />
                <Entypo name="phone" size={22} color="#000e93" />
              </View>

              <View style={{ zIndex: 3 }}>
                <CommonDropdown label={'Schools'} list={handleSchoolValue(this.props.schoolList)} setValue={(value) => this.setState({ school: value })} />
              </View>

              <View style={{ marginVertical: 15, zIndex: 2 }}>
                <CommonDropdown label={'Classes'} list={handleClassValue(this.props.classList)} setValue={(value) => this.setState({ classSl: value })} />
              </View>

              <View style={styles.textfields}>
                <TextInput
                  placeholder='Password'
                  placeholderTextColor={'#000e93'}
                  secureTextEntry
                  style={styles.textinput}
                  onChangeText={(text) => this.setState({ password: text })}
                />
                <Entypo name="lock" size={22} color="#000e93" />
              </View>

              <View style={{ ...styles.textfields, marginVertical: 15 }}>
                <TextInput
                  placeholder='Confirm Password'
                  placeholderTextColor={'#000e93'}
                  secureTextEntry
                  style={styles.textinput}
                  onChangeText={(text) => this.setState({ conf_password: text })}
                />
                <Entypo name="lock" size={22} color="#000e93" />

              </View>

              <TouchableOpacity style={{ width: "100%", backgroundColor: "#00aae5", paddingVertical: 13, borderRadius: 12, display: "flex", justifyContent: "center", elevation: 5, marginTop: 5 }} onPress={() => this.on_StudentRegistration()}>
                <Text style={{ fontSize: 16, fontWeight: "800", fontFamily: "monospace", color: "#fff", textAlign: "center", letterSpacing: 1 }}>REGISTER</Text>
              </TouchableOpacity>
            </View>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginVertical: 15, marginBottom: 25, zIndex: -1 }}>
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

export const mapStateToProps = (store) => {
  return {
    schoolList: store.authenticationReducer.schoolList,
    classList: store.authenticationReducer.classList
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    getSchools: () => dispatch(getSchools()),
    getClasses: () => dispatch(getClasses()),
    onStudentRegistration: (requestBody) => dispatch(onStudentRegistration(requestBody))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);