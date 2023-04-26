import { Text, View, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { Component } from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import { HEIGHT } from './Constants';

class CommonDropdown extends Component {
    render() {
        return (
            <View >
                <TouchableOpacity style={styles.textfields} onPress={() => this.props.onClick()}>
                    <Text style={styles.textinput}>{this.props.label}</Text>
                    <Entypo name="chevron-down" size={30} color="#000e93" />
                </TouchableOpacity>
                {this.props.show &&
                    <ScrollView style={{ borderRadius: 5, backgroundColor: "#0054b7", zIndex: 2, padding: 8, position: "absolute", width: "100%", top: 55, borderColor: "#fff", borderWidth: 1, borderStyle: "solid", elevation: 5, maxHeight: 200 }} >
                        <View style={{ height: "100%" }}>
                            {
                                this.props.list.length > 0 && this.props.list.map((item, index) => {
                                    return (
                                        <TouchableOpacity key={index} onPress={() => this.props.onClick()} style={{ paddingHorizontal: 10 }}>
                                            <Text style={{ fontSize: 17, color: "#fff", fontWeight: "500", borderBottomWidth: this.props.list.length - 1 == index ? 0 : 0.8, borderStyle: "dashed", paddingVertical: 10, borderColor:"#fff" }}>{item}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textfields: { width: "100%", padding: 3, borderRadius: 7, borderRadius: 12, backgroundColor: "#fff", paddingHorizontal: 20, borderColor: "#9bc8fa", borderWidth: 0.8, display: "flex", flexDirection: "row", alignItems: "center" },
    textinput: { width: "90%", padding: 10, color: "#000e93", fontSize: 15, textAlign: "left", fontWeight: "500" }
})

export default CommonDropdown;