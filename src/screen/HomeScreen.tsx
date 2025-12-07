import { Text, View } from "react-native";
import Constants from "expo-constants";
import * as Updates from "expo-updates"
import Button1 from "../components/Button1";
import Button2 from "../components/Button2";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";



export default function HomeScreen() {
    const { expoConfig } = Constants;
    
    return (
       <SafeAreaView style={{flex:1}}>
         <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white'
        }}>
           <View style={{
            position:'absolute',
            top:0
           }}>
             <Header/>
           </View>
            <Text style={{
                fontSize: 20,
                fontWeight: 500,
                color: 'rgba(46, 46, 46, 0.64)',
                marginBottom: 20,
            }}>
                App version {expoConfig?.version}
            </Text>
            <Button1 />
            <Button2 />
        </View>
       </SafeAreaView>
    )
}