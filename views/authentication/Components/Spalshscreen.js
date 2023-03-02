import { Image, StatusBar, Text, View } from 'react-native';
import React, { Component } from 'react';
import { HEIGHT, WIDTH } from '../../common/Constants';

export default class Spalshscreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }
    componentDidMount = () => {
        setTimeout(() => {
            this.props.navigation.navigate('login')
            // AsyncStorage.getItem('loginDetails').then((value) => {
            //     if (value !== null) {
            //         this.props.navigation.navigate('TabNavigatior', 'Dashboard');
            //     }
            //     else {
            //         this.props.navigation.navigate('Login');
            //     }
            // })
        }, 4000);
    }

    render() {
        return (
            <View style={{ width: WIDTH, height: HEIGHT, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
                <StatusBar backgroundColor={'#3b3b45'} />
                <View style={{width:"110%", height:"90%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <Image source={require('../../images/Sweet.gif')} style={{ height: "100%", width: "90%" }} />
                </View>
            </View>
        )
    }
}