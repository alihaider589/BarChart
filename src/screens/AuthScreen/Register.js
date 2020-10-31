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
                        <View style={{ width: "100%" }}>
                            <Text style={{ fontSize: 30, color: 'white' }}>REGISTER</Text>

                        </View>
                        <View style={{
                            width: "100%", flexDirection: "row", borderBottomColor: 'grey',
                            borderBottomWidth: 1, marginTop: 20
                        }}>
                            <AntDesign name="user" size={25} color="rgb(6, 194, 252)" style={{ alignSelf: "center" }} />
                            <TextInput
                                placeholder="Username"
                                placeholderTextColor="gray"
                                value={this.state.UserName}
                                onChangeText={(val) => this.setState({ UserName: val })}
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
                            <Entypo name="location" size={25} color="rgb(33, 236, 19)" style={{ alignSelf: "center" }} />
                            <TextInput
                                placeholder="Country"
                                placeholderTextColor="gray"
                                value={this.state.Country}
                                onChangeText={(val) => this.setState({ Country: val })}
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
                            <MaterialIcons name="email" size={25} color="rgb(255, 84, 109)" style={{ alignSelf: "center" }} />
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
                            <AntDesign name="lock" size={30} color="rgb(6, 192, 250)" style={{ alignSelf: "center" }} />
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
                            <TouchableOpacity activeOpacity={0.8} style={{ backgroundColor: 'rgb(42, 49, 61)', borderWidth: 1.5, borderTopWidth: 0.3, borderColor: 'rgba(0,0,0,0.6)', height: 40, alignItems: "center", justifyContent: "center", borderRadius: 10 }}>

                                <Text style={{ textAlign: "center", color: 'white' }}>Sign up </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: "100%", padding: 10 }}>
                            <Text style={{ textAlign: "center", color: 'white' }}>OR</Text>
                    </View>
                        <View style={{ width: '100%', padding: 10 }}>
                            <TouchableOpacity activeOpacity={0.8} style={{ backgroundColor: 'rgb(42, 49, 61)', borderWidth: 1.5, borderTopWidth: 0.3, borderColor: 'rgba(0,0,0,0.6)', height: 40, alignItems: "center", justifyContent: "center", borderRadius: 10 }}>

                                <Text style={{ textAlign: "center", color: 'white' }}>Guest Login </Text>
                            </TouchableOpacity>
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
        backgroundColor: 'rgb(40, 43, 52)',
        height: Dimensions.get('window').height,
        flex: 1,
        marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
        padding: 10,
        alignItems: 'center',
        justifyContent: "center",

    },
    Card: {
        height: Dimensions.get('window').height, marginTop: 30,
        backgroundColor: 'rgb(42, 49, 61)',
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