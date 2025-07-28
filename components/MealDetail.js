import {View,Text,StyleSheet} from "react-native";

function MealDetail({duration,complexity,affordability,textStyle}){

    return(
    <View style={Styles.mealDetailsCont}>

            <Text style={[Styles.textDetails,textStyle]}>{duration}</Text>
            <Text  style={[Styles.textDetails,textStyle]}>{complexity}</Text>
            <Text  style={[Styles.textDetails,textStyle]}>{affordability}</Text>

    </View>

    )

}


const Styles=StyleSheet.create({
    mealDetailsCont:{
      
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
     textDetails:{
        padding:10
    }


})
export default MealDetail;