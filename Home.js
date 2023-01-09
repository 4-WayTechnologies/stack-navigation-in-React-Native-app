import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
    const NavigationPage=()=>{
            navigation.navigate('About')
    }
  return (
    <View style={styles.container}>
    <View>
    
    <Text style={styles.Navigation_text}>Navigation Page</Text>
    <Image source={{uri:'https://i.pinimg.com/236x/35/42/7e/35427ec2c245cb70b1424f6ab511ed01.jpg'}} style={styles.image}/>
    
         <TouchableOpacity style={styles.create_btn} onPress={()=>NavigationPage()}>
         
         <Text style={styles.btn_text}>Open Page</Text>
         </TouchableOpacity>
    </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#000000'
      },Navigation_text:{
        fontSize:20,
        color:'#ffffff',
        alignSelf:'center',
        marginTop:20
    
      },image:{
        width:'100%',height:500,
        marginTop:20
      },create_btn:{
        width:340,
        height:50,
        backgroundColor:'#CD5808',
        borderRadius:20,
        alignItems:"center",
        justifyContent:'center',
        marginHorizontal:30,
        marginTop:20
      },btn_text:{
        color:'#ffffff',
        fontSize:20
      },FullBack_width:{width:'100%',
      height:'100%',
      position:'absolute', 
      elevation:1,
      backgroundColor:'rgba(0, 0, 0, 0.65)',
      flex:1},
})