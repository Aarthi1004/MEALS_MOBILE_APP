import {View,Text,StyleSheet, Pressable,Image,Platform} from "react-native";
import MealDetail from "../MealDetail";

function MealItem({title,imageUrl,duration,complexity,affordability,onPress}){

    return(
        <View style={Styles.mealCont}>
            <Pressable  style={({pressed})=>pressed? Styles.buttonStyle :null}android_ripple={{color:"#ccc"}}
                onPress={onPress}
                >
              <View  style={Styles.innerMealCont}>
                <View >

                    <Image style={Styles.image} source={{uri:imageUrl}} />
                    <Text style={Styles.textCont}>{title}</Text>

                </View>

                <MealDetail duration={duration} complexity={complexity} affordability={affordability} />

                
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const Styles=StyleSheet.create({

    mealCont:{

        margin:16,
        borderRadius:8,
        backgroundColor:"white",
        overflow:Platform.OS=="android" ? "hidden":null,
        shadowColor:"white",
        
        

    },

    innerMealCont:{
         borderRadius:8,
      

    },

    image:{
        width:"100%",
        height:200

    },

    buttonStyle:{
        opacity:0.25
    },

    textCont:{
        fontSize:18,
        fontWeight:"bold",
        textAlign:"center"
    },
    

   



})