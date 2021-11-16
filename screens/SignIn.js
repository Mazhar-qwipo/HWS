import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Input, StyleSheet, Alert, Button, TextInput, TouchableOpacity } from 'react-native'
import * as RootNavigation from '../RootNavigation';
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../assets/styles/colors';
import { globalStyle } from '../assets/styles/globalStyle';
import login from '../services/authservices';
import { Context } from '../GlobalStateStore';
import { clearAll, getDetail, isSetUserDetail, setDetail } from '../services/sharedPref';
import { isEmptyValue } from '../services/commonServices';

//https://bestofreactjs.com/repo/sriraman-react-native-shared-preferences-react-react-native-awesome-components
function SignInScreen({ navigation: { navigate } }) {

    const [state, setState] = useContext(Context);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    
    useEffect(() => {
        getDetail().then(val => {
            console.log("loginData- ",val);
            if(!isEmptyValue(val)){
                if(val){
                    RootNavigation.navigate('BloodDonationDashboardScreen');
                }
            }
          });
        
    }, []);

    async function onPressLogin() {
        setState({ isLoading: true });
        let lr = await login({ "email": username, password });
        setState({ isLoading: false });
        console.log("lr-", lr.data[0]);
        if (lr.status == 200 && lr.data.length > 0) {
            setDetail(lr.data[0]);
            RootNavigation.navigate('BloodDonationDashboardScreen');
        } else {
            Alert.alert(lr.message);
        }

        console.log("isSetUserDetail- ", isSetUserDetail());
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.sideView}><Text style={globalStyle.heading2}>Login To Continue! </Text></View>
            <View style={styles.centerView}>
                <TextInput style={globalStyle.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Email"
                    placeholderTextColor={COLORS.placeholderColor}
                    selectionColor={COLORS.selectionColor}
                    maxLength={100}
                    keyboardType="email-address"
                    name="username"
                    onChangeText={setUsername}
                    maxLength={100}
                />
                <TextInput style={globalStyle.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor={COLORS.placeholderColor}
                    selectionColor={COLORS.selectionColor}
                    maxLength={20}
                    name="password"
                    onChangeText={setPassword}
                    maxLength={20}
                />
                <TouchableOpacity onPress={() => RootNavigation.navigate('ForgotPassword')}>
                    <Text style={globalStyle.linkText}>Forgot Password</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[globalStyle.btnBlack,globalStyle.btnLarge]} onPress={onPressLogin}>
                    <Text style={globalStyle.btnText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyle.row} onPress={() => RootNavigation.navigate('SignUpScreen')}>
                    <Text style={globalStyle.linkText}>New To HBDC</Text>
                    <Text style={[globalStyle.linkText, globalStyle.txtUnderline]}>Sign Up</Text>
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
        marginTop: '40%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sideView: {
        padding: 30,
        alignItems: 'flex-start',
    },
});

export default SignInScreen