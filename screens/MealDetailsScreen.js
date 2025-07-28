import {View,Text,Image,StyleSheet,ScrollView,Button} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import Subtitle from "../components/MealDetails/Subtitle";
import List from "../components/MealDetails/List";
import { useLayoutEffect,useContext } from "react";
import IconButton from "../components/IconButton";
import { FavContext } from "../store/context/favorite-context";

function MealDetailsScreen({route,navigation}){

    

    const id=route.params.id;
    const selectedMeal=MEALS.find((meal)=>meal.id===id);
    const FavoriteContext=useContext(FavContext);
    const isFavorite=FavoriteContext.ids.includes(id);
    //console.log(isFavorite);

    const favButtonPressed=()=>{
        //console.log("buton presssed");
       if(isFavorite){
        FavoriteContext.remFav(id)
       }
       else{
        FavoriteContext.addFav(id);
       }

    };

    useLayoutEffect(()=>{

        navigation.setOptions({


            headerRight: ()=>{
                return (
                   <IconButton icon={isFavorite ? "star":"star-outline"} color="white" onPress={favButtonPressed} />
                )
            }
        })

         


    },[navigation,isFavorite])


    return(
        <ScrollView>
            <Image  style={styles.image} source={{uri:selectedMeal.imageUrl}}/>

            
             <Text style={styles.title}>{selectedMeal.title}</Text>

             <MealDetail duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability}
               textStyle={{color:"white"}}
             />

         <View style={styles.ingCont}>
          
           <View style={styles.subtitlecont}>
             <Subtitle>Ingredients</Subtitle>
           </View>
      
           <List dataArr={ selectedMeal.ingredients} />

             <View style={styles.subtitlecont}>
            <Subtitle>Steps</Subtitle>
            </View>

          <List dataArr={ selectedMeal.steps}  />
        
         </View>

            
       
            
        </ScrollView>
    )

}

export default MealDetailsScreen;

const styles=StyleSheet.create({
    image:{
        width:'100%',
        height:300
    },
    title:{
        color:"white",
        textAlign:"center"
    },
    subtitlecont:{
        borderBottomWidth:3,
        borderBottomColor:"#e2b497",
        margin:4,
        marginHorizontal:24
    },
    ingCont:{
        
        marginBottom:50
    }
})