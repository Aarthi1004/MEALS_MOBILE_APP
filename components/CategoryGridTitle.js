import {Pressable, Text,View,StyleSheet, Platform} from "react-native";

function CategoryGridTitle({title,color,onPress}){

  return(
  <View style={[styles.gridView,{backgroundColor:color}]}>
    <Pressable android_ripple={{color:"#ccc"}} style={({pressed})=> [styles.button,pressed? "pressedFunc":null]}
      onPress={onPress}
      >
      <View style={styles.innerContainer}>
        <Text style={styles.text}>{title}</Text>
    </View>
    </Pressable>

  </View>

  )


 
    

}
 const styles=StyleSheet.create({

    gridView:{
      flex:1,
      margin:16,
      height:150,
       borderRadius:8,
      elevation:4,
      backgroundColor:"white",
      shadowColor:"black",
      shadowOffset:{width:0,height:2},
      shadowRadius:8,
      overflow:Platform.OS=="android" ? "hidden":"visible"

      
      
    },
    pressedFunc:{
      opacity:0.5
    },
    button:{
    flex:1
    },

    innerContainer:{
      flex:1,
      alignItems:"center",
      padding:16,
       
     
      
    },

    text:{
      fontSize:16,
      fontWeight:"bold"
    }


  })

export default CategoryGridTitle;