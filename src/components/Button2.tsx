import { useNavigation } from "@react-navigation/native";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
const width= Dimensions.get('window').width;
export default function Button2() {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity
                style={{
                    width: width/1.4,
                    backgroundColor: 'blue',
                    paddingHorizontal: 25,
                    paddingVertical: 10,
                    borderRadius: 10,
                }}
                onPress={() => navigation.navigate("Build" as never)}
            >
                <Text style={{
                    color: 'white',
                    fontSize: 17,
                    fontWeight: 500,
                    textAlign: 'center'
                }}>Show Build Info</Text>
            </TouchableOpacity>
        </View>
    )
}