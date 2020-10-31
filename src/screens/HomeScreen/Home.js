import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, StatusBar, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { FontAwesome, Entypo, MaterialCommunityIcons, FontAwesome5, AntDesign } from '@expo/vector-icons';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: [
                {
                    title: "Item 1",
                    text: "Text 1",
                },
                {
                    title: "Item 2",
                    text: "Text 2",
                },
                {
                    title: "Item 3",
                    text: "Text 3",
                },
                {
                    title: "Item 4",
                    text: "Text 4",
                },
                {
                    title: "Item 5",
                    text: "Text 5",
                },
            ]
        }
    }

    _renderItem({ item, index }) {
        return (
            <View style={{
                backgroundColor: 'floralwhite',
                borderRadius: 5,
                height: 250,
                padding: 50,
            }}>
                <Text style={{ fontSize: 30 }}>{item.title}</Text>
                <Text>{item.text}</Text>
            </View>

        )
    }

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
                <View>
                    <Carousel
                        layout={"default"}
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}
                        sliderWidth={400}
                        itemWidth={300}
                        renderItem={this._renderItem}
                        onSnapToItem={index => this.setState({ activeIndex: index })} />
                </View>
                <View style={styles.Card}>

                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity style={{ margin: 10, borderWidth: 1.6, padding: 10, borderColor: 'rgba(0,0,0,0.6)', borderRadius: 10, borderTopWidth: 0.5 }}>
                            <View style={{ alignContent: 'center', justifyContent: "center", alignItems: 'center' }}>
                                <FontAwesome name="calendar" size={40} color="rgb(255, 84, 109)" />
                                <Text style={{ textAlign: "center", marginTop: 5, color: "white" }}>Calender</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ margin: 10, borderWidth: 1.6, padding: 10, borderColor: 'rgba(0,0,0,0.6)', borderRadius: 10, borderTopWidth: 0.5 }}>
                            <View style={{ alignContent: 'center', justifyContent: "center", alignItems: 'center' }}>
                                <Entypo name="bar-graph" size={40} color="rgb(6, 194, 252)" />
                                <Text style={{ textAlign: "center", marginTop: 5, color: "white" }}>Staistics</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ margin: 10, borderWidth: 1.6, padding: 10, borderColor: 'rgba(0,0,0,0.6)', borderRadius: 10, borderTopWidth: 0.5 }}>
                            <View style={{ alignContent: 'center', justifyContent: "center", alignItems: 'center' }}>
                                <MaterialCommunityIcons name="package-variant-closed" size={40} color="rgb(255, 84, 109)" />
                                <Text style={{ textAlign: "center", marginTop: 5, color: "white" }}>Package</Text>
                            </View>
                        </TouchableOpacity>
                    </View>



                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                        <TouchableOpacity style={{ margin: 10, borderWidth: 1.6, padding: 10, borderColor: 'rgba(0,0,0,0.6)', borderRadius: 10, borderTopWidth: 0.5 }}>
                            <View style={{ alignContent: 'center', justifyContent: "center", alignItems: 'center' }}>
                                <AntDesign name="sharealt" size={40} color="rgb(255, 84, 109)" />
                                <Text style={{ textAlign: "center", marginTop: 5, color: "white" }}>{`     Recruit`}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ margin: 10, borderWidth: 1.6, padding: 10, borderColor: 'rgba(0,0,0,0.6)', borderRadius: 10, borderTopWidth: 0.5 }}>
                            <View style={{ alignContent: 'center', justifyContent: "center", alignItems: 'center' }}>
                                <AntDesign name="sharealt" size={40} color="rgb(6, 194, 252)" />
                                <Text style={{ textAlign: "center", marginTop: 5, color: "white" }}>{`   Bets    `}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ margin: 10, borderWidth: 1.6, padding: 10, borderColor: 'rgba(0,0,0,0.6)', borderRadius: 10, borderTopWidth: 0.5 }}>
                            <View style={{ alignContent: 'center', justifyContent: "center", alignItems: 'center' }}>
                                <FontAwesome5 name="hand-holding-usd" size={40} color="rgb(255, 84, 109)" />
                                <Text style={{ textAlign: "center", marginTop: 5, color: "white" }}>{`Payment`}</Text>
                            </View>
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
        justifyContent: "center"

    },
    Card: {

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