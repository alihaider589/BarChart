import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet, StatusBar, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { FontAwesome, Entypo, MaterialCommunityIcons, FontAwesome5, AntDesign ,Feather} from '@expo/vector-icons';

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
                 <View style={{width:'100%',height:40,padding:10}}>
<Text style={{textAlign:"center",fontSize:27,color:"white"}}>
Choose Payment Method
</Text>
<View style={{backgroundColor:"white",borderBottomWidth:1,elevation:3,height:3,width:50,borderRadius:20,alignSelf:"center",marginTop:5}}>

</View>

<View style={{alignItems:"center",width:'100%'}}>
<View style={{ flexDirection: "row", marginTop: 10 }}>
<TouchableOpacity style={{ margin: 10, borderWidth: 1.6, padding: 20, borderColor: 'rgba(0,0,0,0.6)', borderRadius: 20, borderTopWidth: 0.5 }}>
  <View style={{padding:10}}>
  <FontAwesome name="bank" size={40} color="rgb(255, 84, 109)" />
  <Text style={{textAlign:"center",color:"white",marginTop:10}}>Bank</Text>
  </View>
</TouchableOpacity>
<TouchableOpacity style={{ margin: 10, borderWidth: 1.6, padding: 20, borderColor: 'rgba(0,0,0,0.6)', borderRadius: 20, borderTopWidth: 0.5 }}>
<View style={{padding:10}}>
<Entypo name="wallet" size={40} color="rgb(6, 194, 252)" />
<Text style={{textAlign:"center",color:"white",marginTop:10}}>Wallet</Text>
</View>
</TouchableOpacity>

</View>
<View style={{ flexDirection: "row", marginTop: 10 }}>
<TouchableOpacity style={{ margin: 10, borderWidth: 1.6, padding: 20, borderColor: 'rgba(0,0,0,0.6)', borderRadius: 20, borderTopWidth: 0.5 }}>
  <View style={{padding:10}}>
  <FontAwesome name="paypal" size={40} color="rgb(255, 84, 109)" />
  <Text style={{textAlign:"center",color:"white",marginTop:10}}>Paypal</Text>
  </View>
</TouchableOpacity>
<TouchableOpacity style={{ margin: 10, borderWidth: 1.6, padding: 20, borderColor: 'rgba(0,0,0,0.6)', borderRadius: 20, borderTopWidth: 0.5 }}>
<View style={{padding:10}}>
<Feather name="credit-card" size={40} color="rgb(6, 194, 252)" />
<Text style={{textAlign:"center",color:"white",marginTop:10}}>Debit</Text>
</View>
</TouchableOpacity>

</View>
<View style={{ width: '85%', marginTop: 10, padding: 10 }}>
<TouchableOpacity activeOpacity={0.3    } style={{flexDirection:'row',borderWidth:2,borderColor:'rgba(0,0,0,0.6)',borderTopWidth:0.3, height: 40, alignItems: "center", justifyContent: "center", borderRadius: 15 }}>

    <Text style={{ textAlign: "center", color: 'white' }}>Pay Now </Text>
    <AntDesign name="caretright" size={15} color="white" style={{marginLeft:30}}/>
    </TouchableOpacity>
</View>

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