import { CATEGORIES,MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealList from "../components/MealLists/MealList";

function MealsOverViewScreen({route,navigation}){

    const catId=route.params.catId;
    const meals=MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId)>=0;
    });

     const pressedFunc=(id)=>{
        navigation.navigate("MealsDetails",{
            id:id
            
        })
    }



    useLayoutEffect(()=>{

        const categoryTitle=CATEGORIES.find((category)=>category.id===catId).title;

        navigation.setOptions({
            title:categoryTitle
        })

    },[catId,navigation]);
   


    return(
        <MealList 
        
          meals={meals} pressedFunc={pressedFunc}
        
        
        />
    )
   


    

}

export default MealsOverViewScreen;