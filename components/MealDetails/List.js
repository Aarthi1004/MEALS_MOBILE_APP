import { StyleSheet,Text,View } from "react-native";

function List({dataArr}){
    return(
        
        <View>
            {
        dataArr.map((data,index)=>(
            <View key={index} style={styles.textCont}>
        
            <Text  style="text">{data}</Text>

            </View>
            
        ))
        }
                                 
      </View>        
    )
}

const styles=StyleSheet.create({

    textCont:{
    alignItems:"center",
    borderRadius:8,
    margin:4,
    marginHorizontal:24,
    padding:4,
    backgroundColor:"#e2b497",
    margin:3
    }

})

export default List;