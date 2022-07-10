import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Input, StyleSheet, Alert, Button, TextInput, TouchableOpacity } from 'react-native'
import * as RootNavigation from '../RootNavigation';
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../assets/styles/colors';
import { globalStyle } from '../assets/styles/globalStyle';
import { Context } from '../GlobalStateStore';
import { isEmptyValue } from '../services/commonServices';
import { changePassword } from '../services/authservices';
import { getDetail } from '../services/sharedPref';


//https://bestofreactjs.com/repo/sriraman-react-native-shared-preferences-react-react-native-awesome-components
function ChangePasswordScreen({ navigation: { navigate } }) {

    const [state, setState] = useContext(Context);
    //const [old_password, setOldPassword] = useState(null);
    const [id, setUserId] = useState(null);
    const [new_password, setNewPassword] = useState(null);
    const [confirm_password, setConfirmPassword] = useState(null);
    useEffect(() => {
        getDetail().then(val => {
            if(!isEmptyValue(val)){
                if(val){
                    let userdata=JSON.parse(val);
                    console.log('val -- ',userdata.id);
                    setUserId(userdata.id);
                }else{
                    RootNavigation.navigate('SignInScreen');
                }
            }else{
                RootNavigation.navigate('SignInScreen');
            }
          }).catch(err=>{
            console.log('val error-- ',err);
          });
        
    }, []);
    async function onChangePassword() {
        // if (isEmptyValue(old_password)) {
        //     Alert.alert("Please enter old password!");
        //     return;
        // }
        if (isEmptyValue(new_password)) {
            Alert.alert("Please enter new password!");
            return;
        }
        if (isEmptyValue(confirm_password)) {
            Alert.alert("Please enter confirm password!");
            return;
        }
        if (new_password!=confirm_password) {
            Alert.alert("New password and confirm password are not same!");
            return;
        }

        setState({ isLoading: true });
        let reqData = await changePassword({
            //old_password, 
            id,
            new_password, 
            confirm_password,
        });
        setState({ isLoading: false });
        if (reqData.status == 200 && !isEmptyValue(reqData.data)) {
            Alert.alert("Password Updated Successfully.");

        } else {
            Alert.alert(reqData.message);
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.sideView}>
                <Text style={globalStyle.heading3}>Change</Text>
                <Text style={globalStyle.heading3}>Password</Text>
                {/* <Text style={globalStyle.smallNoteText}>Enter your contact and we will send you instruction on how to reset it.</Text> */}
            </View>
            <View style={styles.centerView}>
                {/* <TextInput style={globalStyle.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Old Password"
                    placeholderTextColor={COLORS.placeholderColor}
                    selectionColor={COLORS.selectionColor}
                    maxLength={100}
                    keyboardType="visible-password"
                    name="oldpassword"
                    onChangeText={setOldPassword}
                /> */}
                <TextInput style={globalStyle.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="New Password"
                    placeholderTextColor={COLORS.placeholderColor}
                    selectionColor={COLORS.selectionColor}
                    maxLength={100}
                    keyboardType="visible-password"
                    name="newpassword"
                    onChangeText={setNewPassword}
                />
                <TextInput style={globalStyle.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Confirm Password"
                    placeholderTextColor={COLORS.placeholderColor}
                    selectionColor={COLORS.selectionColor}
                    maxLength={100}
                    keyboardType="visible-password"
                    name="confirmpassword"
                    onChangeText={setConfirmPassword}
                />
               
                <TouchableOpacity style={globalStyle.btnBlack} onPress={onChangePassword}>
                    <Text style={globalStyle.btnText}>      Submit      </Text>
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

export default ChangePasswordScreen