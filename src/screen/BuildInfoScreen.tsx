import { Platform, StyleSheet, Text, View } from "react-native";
import * as Updates from "expo-updates"
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "expo-constants";
import Header1 from "../components/Header1";

export default function BuildInfoScreen() {
    const { expoConfig } = Constants;
    //const updateChannel = "production"
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                <View style={{
                    position: 'absolute',
                    top: 0
                }}>
                    <Header1 />
                </View>
                <Text style={styles.txt}>App version: <Text style={styles.txt1}>{expoConfig?.version}</Text></Text>
                <Text style={styles.txt}>Android version: <Text style={styles.txt1}>{expoConfig?.android?.versionCode}</Text></Text>
                <Text style={styles.txt}>Runtime version: <Text style={styles.txt1}>{expoConfig?.runtimeVersion?.policy}</Text></Text>
                <Text style={styles.txt}>Platform: <Text style={styles.txt1}>{Platform.OS}</Text></Text>
                <Text style={styles.txt}>Build number: <Text style={styles.txt1}>{expoConfig?.ios?.buildNumber}</Text></Text>
                <Text style={styles.txt}>Update channel: <Text style={styles.txt1}>{Updates.channel}</Text></Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 20, fontWeight: 500,
        color: 'rgba(42, 42, 42, 0.73)'
    },
    txt1: {
        fontSize: 20, fontWeight: 500,
        color: 'rgba(247, 0, 0, 0.86)'
    },

})