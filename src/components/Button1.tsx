import { Text, TouchableOpacity, View, ActivityIndicator, Dimensions } from "react-native";
import * as Updates from "expo-updates"
import { useState } from "react";
const width = Dimensions.get('window').width;
export default function Button1() {
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("");
    const CheckForUpdates = async () => {
        if (__DEV__) {
            setMsg("You are using the latest version")
            return;
        }
        else {
            try {
                setLoading(true);
                const update = await Updates.checkForUpdateAsync();
                if (update.isAvailable) {
                    await Updates.fetchUpdateAsync();
                    await Updates.reloadAsync();
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
    }

    return (
        <View style={{ marginBottom: 10 }}>
            {
                msg && (
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 500,
                        color: 'rgba(46, 46, 46, 0.64)',
                        marginBottom: 20,
                    }}>{msg}</Text>
                )
            }
            {
                loading ? (
                    <ActivityIndicator size="large" color={'rgba(0, 0, 0, 0.13)'} />
                ) : (
                    <TouchableOpacity
                        style={{
                            width: width / 1.4,
                            backgroundColor: 'red',
                            paddingHorizontal: 25,
                            paddingVertical: 10,
                            borderRadius: 10,
                        }}
                        onPress={() => CheckForUpdates()}
                    >

                        <Text style={{
                            color: 'white',
                            fontSize: 17,
                            fontWeight: 500,
                            textAlign: "center"
                        }}>Latest Updates</Text>

                    </TouchableOpacity>
                )
            }
        </View>
    )
}