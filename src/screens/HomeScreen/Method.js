import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, StatusBar, Dimensions, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { MaterialIcons, AntDesign, Entypo } from '@expo/vector-icons';

export default class Register extends Component {
    state = {
        isLoading: false,
        Name: "",
        Email: "",
        Password: "",
        UserName: "",
        Country: "",
        secureEntry: true,
    };
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={{ flex: 1, width: '100%' }}>

                    <View style={styles.Card}>
                        <View style={{ width: "100%", padding: 10 }}>
                            <Text style={{ textAlign: "center", fontSize: 27, color: "white", }}>Choose Payment Method</Text>
                            <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: "bold", color: "white" }}>______</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: 'rgb(34, 33, 64)',
        height: Dimensions.get('window').height,
        flex: 1,
        marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
        padding: 10,
        alignItems: 'center',
        justifyContent: "center",

    },
    Card: {
        height: Dimensions.get('window').height, marginTop: 30,
        backgroundColor: 'rgb(21, 38, 82)',
        width: '100%',
        padding: 10,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: "center",
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(0,0,0,0.4)',
        borderLeftColor: 'rgba(0,0,0,0.4)',
        borderLeftWidth: 2,
        borderRightColor: 'rgba(0,0,0,0.4)',
        borderRightWidth: 2,

    }
})