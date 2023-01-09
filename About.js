import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'

const About = ({navigation}) => {
    const NavigationPage=()=>{
        navigation.goBack()
    }
    const NextPage=()=>{
        navigation.navigate('Contact')
    }
  return (
    <View style={styles.container}>
    <View>
    
    <TouchableOpacity style={styles.create_btn} onPress={()=>NavigationPage()}>
         
    <Text style={styles.btn_text}>Back Page</Text>
    </TouchableOpacity>
    <Image source={{uri:'https://i.pinimg.com/236x/94/52/a4/9452a42c209c8376343989045bd6877a.jpg'}} style={styles.image}/>
    <TouchableOpacity style={styles.create_btn} onPress={()=>NextPage()}>
         
         <Text style={styles.btn_text}>Next Page</Text>
         </TouchableOpacity>
        
    </View>
    </View>
  )
}

export default About

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
        width:100,
        height:50,
        backgroundColor:'#CD5808',
        borderRadius:20,
        alignItems:"center",
        justifyContent:'center',
        marginHorizontal:30,
        marginTop:20
      },btn_text:{
        color:'#ffffff',
        fontSize:15
      },FullBack_width:{width:'100%',
      height:'100%',
      position:'absolute', 
      elevation:1,
      backgroundColor:'rgba(0, 0, 0, 0.65)',
      flex:1},
})