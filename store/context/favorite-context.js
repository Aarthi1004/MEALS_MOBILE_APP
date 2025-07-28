import { createContext, useState } from "react";

export const FavContext=createContext({
    ids:[],
    addFav:(id)=>{},
    remFav:(id)=>{}
})


function FavoriteContext({children}){

    const [favMeals,setfavMeals]=useState([]);

    function addFavoriteMeal(id){
        //console.log("ADDING", id);
        setfavMeals((meal)=>[...meal,id]);
    }

    function remFavoriteMeal(id){
        //console.log("REMOVING", id);
        setfavMeals((meals)=>meals.filter((meal)=>meal!==id))
    }

    const value={
        ids:favMeals,
        addFav:addFavoriteMeal,
        remFav:remFavoriteMeal
    }

    return(
        <FavContext.Provider value={value}>{children}</FavContext.Provider>

    )

}

export default FavoriteContext;