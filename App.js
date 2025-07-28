import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavouriteScreen from './screens/FavouriteScreen';
import FavoriteContext from './store/context/favorite-context';


export default function App() {
  
const Stack=createNativeStackNavigator();
const Drawer=createDrawerNavigator();


  const DrawerNavigator=()=>{

    return(
    
      <Drawer.Navigator
      
      screenOptions={{
            headerStyle:{backgroundColor:"#351401"},
            sceneStyle:{backgroundColor:"#3f2f25"},
            drawerContentStyle: { backgroundColor: '#351401' },
            headerTintColor:"white",
            drawerInactiveTintColor:"white",
            drawerActiveTintColor:"#351401",
            drawerActiveBackgroundColor:"#e4baa1",
          }}
      >
        <Drawer.Screen name="Categories" component={CategoriesScreen}   
        
          options={
            {
              drawerIcon:({color,size})=>(
                <Ionicons name="list" color={color} size={size} />
              )
            }
          }
        
        />
        <Drawer.Screen name="FavScreen" component={FavouriteScreen}
        options={
            {
              drawerIcon:({color,size})=>(
                <Ionicons name="star" color={color} size={size} />
              )
            }
          }
         />

        
      </Drawer.Navigator>
 
    )

  }


  return (
    <>
    <StatusBar style='light' />
    <FavoriteContext>
       <NavigationContainer>

        <Stack.Navigator
        
          screenOptions={{
            headerStyle:{backgroundColor:"#351401"},
            contentStyle:{backgroundColor:"#3f2f25"},
            headerTintColor:"white"
          }}
        >
          
           <Stack.Screen name="MealsCategories" component={DrawerNavigator} 
           options={{title:"Meals Categories",headerShown:false}}
           
           />
           <Stack.Screen name="MealsOverView" component={MealsOverViewScreen} />

           <Stack.Screen name="MealsDetails" component={MealDetailsScreen} />


        </Stack.Navigator>


       </NavigationContainer>

       </FavoriteContext>
   

    </>
    
  );
}

const styles = StyleSheet.create({
  
});
