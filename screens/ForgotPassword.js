import React, { useContext, useState } from 'react'
import { View, Text, Input, StyleSheet, Alert, Button, TextInput, TouchableOpacity } from 'react-native'
import * as RootNavigation from '../RootNavigation';
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../assets/styles/colors';
import { globalStyle } from '../assets/styles/globalStyle';
import { Context } from '../GlobalStateStore';


//https://bestofreactjs.com/repo/sriraman-react-native-shared-preferences-react-react-native-awesome-components
function ForgotPassword({ navigation: { navigate } }) {

    const [state, setState] = useContext(Context);
    const [contact, setContact] = useState(null);

    async function onPressForget() {
        Alert.alert("Message API not found.");
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.sideView}>
                <Text style={globalStyle.heading3}>Forgot</Text>
                <Text style={globalStyle.heading3}>Password?</Text>
                <Text style={globalStyle.smallNoteText}>Enter your contact and we will send you instruction on how to reset it.</Text>
            </View>
            <View style={styles.centerView}>
                <TextInput style={globalStyle.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Contact"
                    placeholderTextColor={COLORS.placeholderColor}
                    selectionColor={COLORS.selectionColor}
                    maxLength={100}
                    keyboardType="number-pad"
                    name="contact"
                    onChangeText={setContact}
                    maxLength={10}
                />
               
                <TouchableOpacity style={globalStyle.btnBlack} onPress={onPressForget}>
                    <Text style={globalStyle.btnText}>Send Now</Text>
                </TouchableOpacity>
               
            </View>
        </SafeAreaView>
    );


}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: COLORS.themeColor
    },
    centerView: {
        marginTop: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sideView: {
        padding: 30,
        alignItems: 'flex-start',
    },
});

export default ForgotPassword