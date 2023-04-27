// import { Text, View, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native'
// import React, { Component } from 'react'
// import Entypo from 'react-native-vector-icons/Entypo';
// import { HEIGHT } from './Constants';

// class CommonDropdown extends Component {
//     render() {
//         return (
//             <View >
//                 <TouchableOpacity style={styles.textfields} onPress={() => this.props.onClick()}>
//                     <Text style={styles.textinput}>{this.props.label}</Text>
//                     <Entypo name="chevron-down" size={30} color="#000e93" />
//                 </TouchableOpacity>
//                 {this.props.show &&
//                     <ScrollView style={{ borderRadius: 5, backgroundColor: "#0054b7", zIndex: 2, padding: 8, position: "absolute", width: "100%", top: 55, borderColor: "#fff", borderWidth: 1, borderStyle: "solid", elevation: 5, maxHeight: 200 }} >
//                         <View style={{ height: "100%" }}>
//                             {
//                                 this.props.list.length > 0 && this.props.list.map((item, index) => {
//                                     return (
//                                         <TouchableOpacity key={index} onPress={() => this.props.onClick()} style={{ paddingHorizontal: 10 }}>
//                                             <Text style={{ fontSize: 17, color: "#fff", fontWeight: "500", borderBottomWidth: this.props.list.length - 1 == index ? 0 : 0.8, borderStyle: "dashed", paddingVertical: 10, borderColor:"#fff" }}>{item}</Text>
//                                         </TouchableOpacity>
//                                     )
//                                 })
//                             }
//                         </View>
//                     </ScrollView>
//                 }
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     textfields: { width: "100%", padding: 3, borderRadius: 7, borderRadius: 12, backgroundColor: "#fff", paddingHorizontal: 20, borderColor: "#9bc8fa", borderWidth: 0.8, display: "flex", flexDirection: "row", alignItems: "center" },
//     textinput: { width: "90%", padding: 10, color: "#000e93", fontSize: 15, textAlign: "left", fontWeight: "500" }
// })

// export default CommonDropdown;


import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';


const CommonDropdown = (props) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    return (
        <View style={styles.container}>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                data={props.list}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? props.label : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                    props.setValue(item.value)
                }}
            />
        </View>
    );
};

export default CommonDropdown;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    dropdown: {
        backgroundColor: 'white',
        borderColor: '#9bc8fa',
        borderWidth: 0.8,
        borderRadius: 12,
        paddingHorizontal: 15,
        width: "100%", padding: 7,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        color: "#000e93", fontSize: 15, fontWeight: "500"
    },
});