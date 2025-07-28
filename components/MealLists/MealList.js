import {View,FlatList} from "react-native";
import MealItem from "./MealItem";

function MealList({meals,pressedFunc}){

    
        const renderedItem=(itemData)=>{

        const item=itemData.item;

        const mealItemProps={
            title:item.title,
            imageUrl:item.imageUrl,
            duration:item.duration,
            complexity:item.complexity,
            affordability:item.affordability,
            onPress:()=>{pressedFunc(item.id)}
        }
        return(
            <View>
                <MealItem {...mealItemProps} />
            </View>
        )
    }


    return(
        <View>
            <FlatList 

            data={meals} //array of json objects

            keyExtractor={(item)=>item.id}

            renderItem={renderedItem}


           />
           
        </View>
    

    )

}

export default MealList;