import { Text, View, Image, ImageBackground, ScrollView, TextInput, Button, TouchableOpacity, BackHandler } from 'react-native';
import React, { Component } from 'react';
import { HEIGHT, WIDTH } from '../../common/Constants';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

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
            <ScrollView style={{ height: HEIGHT }}>
                <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 1, y: 1.4 }} colors={['#ffffff', '#0054b7', '#000e93']} style={{ height: HEIGHT }}>
                    <View style={{ width: "120%", height: "40%" }}>
                        <Image source={require('../../images/loginImage1.png')} style={{ height: "85%", width: "100%" }} />
                    </View>
                    <View>
                        <View style={{ width: "80%", display: "flex", alignSelf: "center", justifyContent: "center", marginTop: 20 }}>
                            <Text style={{ fontSize: 30, color: "#f9a25d", fontWeight: "900", textAlign: "center", fontFamily: "monospace" }}>LEARNING EDGE</Text>
                            <Text style={{ fontSize: 20, color: "#fff", fontWeight: "600", textAlign: "center", marginBottom: 30 }}>Login Your Account</Text>
                            <View style={{ width: "100%", padding: 5, borderRadius: 7, borderRadius: 12, backgroundColor: "transparent", paddingHorizontal: 20, borderColor: "#9bc8fa", borderWidth: 0.8, display: "flex", flexDirection: "row", alignItems: "center", }}>
                                <Entypo name="user" size={22} color="#fff" />
                                <TextInput
                                    placeholder='Username'
                                    placeholderTextColor={'#fff'}

                                    style={{ width: "90%", alignSelf: "center", padding: 8, color: "#fff", fontSize: 17, textAlign: "center", fontWeight: "500" }}
                                />
                            </View>

                            <View style={{ width: "100%", padding: 5, borderRadius: 7, borderRadius: 12, backgroundColor: "transparent", paddingHorizontal: 20, borderColor: "#9bc8fa", borderWidth: 0.8, display: "flex", flexDirection: "row", alignItems: "center", marginVertical: 22 }}>
                                <Entypo name="lock" size={22} color="#fff" />
                                <TextInput
                                    placeholder='Password'
                                    placeholderTextColor={'#fff'}
                                    secureTextEntry
                                    style={{ width: "90%", alignSelf: "center", padding: 8, color: "#fff", fontSize: 17, textAlign: "center", fontWeight: "500" }}
                                />
                            </View>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('dashboard')} style={{ width: "100%", backgroundColor: "#00aae5", paddingVertical: 15, borderRadius: 12, display: "flex", justifyContent: "center" }}>
                                <Text style={{ fontSize: 18, fontWeight: "800", fontFamily: "monospace", color: "#fff", textAlign: "center", letterSpacing: 1 }}>LOGIN</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: 15 }}>
                            <Text style={{ color: "#fff", fontSize: 17 }}>Don't Have An Account ?</Text>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('register') }}>
                                <Text style={{ color: "#f9a25d", fontSize: 17, marginLeft: 5 }}>
                                    Sign Up
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </ScrollView>

        )
    }
}