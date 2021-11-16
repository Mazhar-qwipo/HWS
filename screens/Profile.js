import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { globalStyle } from '../assets/styles/globalStyle';
import { profileStyle } from '../assets/styles/profileStyle'
import profileModel from '../models/profileModel';
import * as RootNavigation from '../RootNavigation';
import { isEmptyValue } from '../services/commonServices';
import {clearUserDetail, getDetail} from '../services/sharedPref';
function ProfileScreen() {
    const [userprefdata, setUserPrefData] = useState({});
    const [userNameLetter, setUserNameLetter] = useState('H');
    useEffect(() => {
        getDetail().then(val => {
            console.log("loginData profile- ",val);
            if(!isEmptyValue(val)){
                if(val){
                    console.log('val name-- ',JSON.parse(val).name);
                    setUserPrefData(JSON.parse(val));
                    setUserNameLetter((JSON.parse(val).name).charAt(0));
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

    function logout(){
        clearUserDetail().then(val => {
            console.log("Logout - ",val);
            setUserPrefData(profileModel);
            RootNavigation.navigate('SignInScreen');
          }).catch(err=>{

          });
    }
    function changePassword(){
        
    }
    return (
        <View style={profileStyle.container}>
            <View style={profileStyle.header}></View>
            <View style={profileStyle.avatar}>
                <Text style={profileStyle.nameLetter}>{userNameLetter}</Text>
            </View>
            {/* <Image style={profileStyle.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/> */}
            <View style={profileStyle.body}>
                <View style={profileStyle.bodyContent}>
                    <Text style={profileStyle.name}>{userprefdata.name}</Text>
                    <Text style={profileStyle.info}>{userprefdata.email}</Text>
                    <Text style={profileStyle.info}>{userprefdata.contact}</Text>
                    <Text style={profileStyle.description}>{userprefdata.city_name}, {userprefdata.state_name}</Text>
                </View>
            </View>
            <View style={[globalStyle.row,{marginTop:70,marginLeft:30,marginRight:30}]}>
            <TouchableOpacity style={[globalStyle.btnBlack,globalStyle.btnMediun]} onPress={() => logout()}>
                            <Text style={globalStyle.btnText}>Logout</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[globalStyle.btnBlack,,globalStyle.btnMediun]} onPress={() => changePassword()}>
                            <Text style={globalStyle.btnText}>Change Password</Text>
                        </TouchableOpacity>
            </View>
        </View>
    )
}
export default ProfileScreen