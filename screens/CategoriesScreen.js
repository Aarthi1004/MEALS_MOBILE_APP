import {FlatList} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";

function CategoriesScreen({navigation}){

    const renderedItem=(itemData)=>{

        const pressHandler=()=>{

            navigation.navigate("MealsOverView",{
                catId:itemData.item.id
            })

        }

        return(
        <CategoryGridTitle title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>

        )

    }

    return(
        <FlatList data={CATEGORIES} keyExtractor={(item)=> item.id}
         renderItem={renderedItem}
         numColumns={2}
        
        />
    )

}

export default CategoriesScreen;