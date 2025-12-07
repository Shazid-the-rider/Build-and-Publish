import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
const width = Dimensions.get('window').width;
export default function Header1() {
    const navigation = useNavigation();
    return (
        <View style={{
            height: 60,
            width: width,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomColor: 'rgba(203, 202, 202, 0.73)',
            borderBottomWidth: .4
        }}>
            <TouchableOpacity style={{
                position: 'absolute',
                left: 10,
                zIndex: 1000,
            }}
                onPress={() => { navigation.goBack() }}
            >
                <Ionicons name="chevron-back" size={30} color="black" />
            </TouchableOpacity>
            <Text style={{
                fontSize: 20,
                fontWeight: 500,
                color: 'rgba(51, 50, 50, 0.91)'
            }}>Build Info</Text>
        </View>
    )
}