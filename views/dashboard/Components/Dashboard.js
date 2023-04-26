import { Text, View, StatusBar, ScrollView } from 'react-native'
import React, { Component } from 'react'
import HomeCarousel from '../../common/HomeCrousel'
import LinearGradient from 'react-native-linear-gradient'
import { HEIGHT, WIDTH } from '../../common/Constants';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const icons = {
  'PDF': <FontAwesome5 name="file-pdf" size={22} color="red" />,
  'MCQs': <MaterialCommunityIcons name="square-circle" size={22} color="#000e93" />,
  'Videos': <AntDesign name="playcircleo" size={22} color="red" />,
  'Test': <Entypo name="text-document" size={22} color="blue" />
}

export default class Dashboard extends Component {
  render() {
    return (
      <ScrollView style={{height: HEIGHT, width: WIDTH,}} contentContainerStyle={{  display:"flex", justifyContent:"center",}}>
        <StatusBar backgroundColor={'#000e93'} />
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={[ '#0054b7', '#000e93', '#0054b7',]} style={{ width:"98%", height:HEIGHT/5, borderBottomLeftRadius:25, display:"flex", alignSelf:"center", borderBottomRightRadius:25, marginLeft:"1%" }}>

        </LinearGradient>
        <HomeCarousel />
        <View style={{ width: "100%", paddingHorizontal: 35, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          {['PDF', 'MCQs', 'Videos', 'Test'].map((item, index) => {
            return (
              <Text key={index}>
                <View style={{ width: "20%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <View style={{ backgroundColor: "#fff", padding: 16, borderRadius: 7 }}>
                    {icons[item]}
                  </View>
                  <Text style={{ color: "#fff", marginTop: 5 }}>{item}</Text>
                </View>
              </Text>
            )
          })
          }
        </View>
      </ScrollView>
    )
  }
}