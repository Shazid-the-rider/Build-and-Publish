import { Dimensions, Text, View } from "react-native";
const width = Dimensions.get('window').width;
export default function Header(){
    return(
        <View style={{
            height:60,
            width:width,
            justifyContent:'center',
            alignItems:'center',
            borderBottomColor:'rgba(203, 202, 202, 0.73)',
            borderBottomWidth:.4
        }}>
            <Text style={{
                fontSize:20,
                fontWeight:500,
                color:'rgba(51, 50, 50, 0.91)'
            }}>Welcome to Home</Text>
        </View>
    )
}