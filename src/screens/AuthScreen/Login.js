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
                    <View style={{ width: "100%" }}>
                        <Text style={{ fontSize: 30, color: 'white' }}>SIGN IN</Text>

                    </View>
                    <View style={{
                        width: "100%", flexDirection: "row", borderBottomColor: 'grey',
                        borderBottomWidth: 1, marginTop: 20
                    }}>
                        <MaterialIcons name="email" size={25} color="red" style={{ alignSelf: "center" }} />
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="gray"
                            value={this.state.Name}
                            onChangeText={(val) => this.setState({ Name: val })}
                            style={{
                                width: "90%",
                                height: 50,
                                paddingLeft: 20,
                                borderRadius: 10,
                                fontSize: 15,
                                fontWeight: "800",
                                color: 'white',


                            }} />
                    </View>
                    <View style={{
                        width: "100%", flexDirection: "row", borderBottomColor: 'grey',
                        borderBottomWidth: 1, marginTop: 20
                    }}>
                        <AntDesign name="lock" size={30} color="lightblue" style={{ alignSelf: "center" }} />
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor="grey"
                            value={this.state.Password}
                            onChangeText={(val) => this.setState({ Password: val })}
                            secureTextEntry={true}
                            style={{
                                width: "90%",
                                height: 50,
                                paddingLeft: 20,
                                color: 'white',
                                borderRadius: 10,
                                fontSize: 15,
                                fontWeight: "800",


                            }} />
                    </View>
                    <View style={{ width: '100%', marginTop: 30, padding: 10 }}>
                        <TouchableOpacity activeOpacity={0.3    } style={{flexDirection:'row',borderWidth:2,borderColor:'rgba(0,0,0,0.6)',borderTopWidth:0.3, height: 40, alignItems: "center", justifyContent: "center", borderRadius: 10 }}>

                            <Text style={{ textAlign: "center", color: 'white' }}>Sign In </Text>
                            <Feather name="log-in" size={25} color="white" style={{marginLeft:30}} />
                            </TouchableOpacity>
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
        justifyContent: "center",
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(0,0,0,0.4)',
        borderLeftColor: 'rgba(0,0,0,0.4)',
        borderLeftWidth: 2,
        borderRightColor: 'rgba(0,0,0,0.4)',
        borderRightWidth: 2,

    }
})