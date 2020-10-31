import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, StatusBar, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import { MaterialIcons, AntDesign,Feather } from '@expo/vector-icons';

export default class Login extends Component {
    state = {
        isLoading: false,
        Name: "",
        Email: "",
        Password: "",
        secureEntry: true,
    };
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.Card}>
                <View style={{width:'100%',alignItems:"center"}}>
                <AntDesign name="questioncircleo" size={50} color="white" />
                <Text style={{color:"white",fontSize:25}}>Help / FAQ</Text>
                </View>
                <View style={{padding:20,}}>
                <View style={{flexDirection:"row",marginTop:20}}>
                <AntDesign name="caretleft" size={20} color="white" />
                <Text style={{color:"white"}}>
        loremLaborum esse duis sint culpa sit velit mollit voluptate enim labore.
            </Text>
                </View>


                <View style={{flexDirection:"row",marginTop:20}}>
                <AntDesign name="caretleft" size={20} color="white" />
                <Text style={{color:"white"}}>
        loremLaborum esse duis sint culpa sit velit mollit voluptate enim labore.
            </Text>
                </View>

                <View style={{flexDirection:"row",marginTop:20}}>
                <AntDesign name="caretleft" size={20} color="white" />
                <Text style={{color:"white"}}>
        loremLaborum esse duis sint culpa sit velit mollit voluptate enim labore.
            </Text>
                </View>


                <View style={{flexDirection:"row",marginTop:20}}>
                <AntDesign name="caretleft" size={20} color="white" />
                <Text style={{color:"white"}}>
        loremLaborum esse duis sint culpa sit velit mollit voluptate enim labore.
            </Text>
                </View>
                </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: 'rgb(40, 43, 52)',
        height: Dimensions.get('window').height,
        flex: 1,
        marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
        padding: 10,
        alignItems: 'center',
        justifyContent: "center"

    },
    Card: {

        backgroundColor: 'rgb(42, 49, 61)',
        width: '100%',
        height: '75%',
        padding: 10,
        borderRadius: 25,
        alignItems: 'center',
      
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(0,0,0,0.4)',
        borderLeftColor: 'rgba(0,0,0,0.4)',
        borderLeftWidth: 2,
        borderRightColor: 'rgba(0,0,0,0.4)',
        borderRightWidth: 2,

    }
})