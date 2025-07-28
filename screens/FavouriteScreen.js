import {View,Text} from "react-native";
import MealList from "../components/MealLists/MealList";
import {MEALS} from "../data/dummy-data";
import { useContext } from "react";
import { FavContext } from "../store/context/favorite-context";

function FavouriteScreen({navigation}){

    const pressedFunc=(id)=>{
        navigation.navigate("MealsDetails",{
            id:id
            
        })
    }


    //console.log(MEALS);
    const favoriteMealsSelected=useContext(FavContext);
    const selected=MEALS.filter(mealItem => favoriteMealsSelected.ids.includes(mealItem.id))
    return(
        <MealList meals={selected} pressedFunc={pressedFunc}/>
    )
}

export default FavouriteScreen;