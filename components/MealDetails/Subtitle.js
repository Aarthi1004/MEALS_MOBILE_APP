import {Text,StyleSheet} from "react-native";

function Subtitle({children}){
    return(
        <Text style={styles.title}>{children}</Text>
    )

}

export default Subtitle;


const styles=StyleSheet.create({
    title:{
        fontWeight:'bold',
        fontSize:24,
        color:"#e2b497",
        textAlign:"center"
    }
})