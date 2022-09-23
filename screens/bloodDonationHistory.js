import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Input, StyleSheet, Alert, Image, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyle } from '../assets/styles/globalStyle';
import {getBloodDonationHistory} from '../services/bloodDonationDataService';
import { Context } from '../GlobalStateStore';
import { getDetail } from '../services/sharedPref';
import { isEmptyValue } from '../services/commonServices';


function BloodDonationHistoryScreen({ navigation: { navigate }, route: { params } }) {
    const [state, setState] = useContext(Context);
    const [donationHistory, setDonationHistory] = useState();
    useEffect(() => {
        getDetail().then(val => {
            if(!isEmptyValue(val)){
                if(val){
                    console.log('val name-- ',JSON.parse(val).name);
                    getBloodDonationHistoryData(JSON.parse(val));
                    
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

    async function getBloodDonationHistoryData(userObj) {
        setState({ isLoading: true });
        let listData = await getBloodDonationHistory(userObj);
        setState({ isLoading: false });
        if (listData.status == 200 && listData.data.length > 0) {
            console.log("history data- ",listData.data);
            setDonationHistory(listData.data);
        } else {
            Alert.alert("Data Not Avilable!");
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={[globalStyle.row, globalStyle.pageHeader]}>
                <View style={globalStyle.listPageTitleBar}>
                    <Text style={globalStyle.listPageHeading}>MY DONATIONS</Text>
                </View>
                <View style={globalStyle.pageIcon}>
                    <Image
                        style={globalStyle.pageIconImage}
                        resizeMode="contain"
                        source={require('../assets/img/BLOODCAMP-W.png')}
                    />
                </View>
            </View>
            <FlatList
            style={globalStyle.marginBottom5}
                data={donationHistory}
                renderItem={({ item }) => 
                    <View style={globalStyle.listCard}>
                        <Text style={globalStyle.bloodBankName}>{item.name}</Text>
                        <Text style={globalStyle.bloodBankContact}>Date: {item.donation_date}</Text>
                        <Text style={globalStyle.bloodBankContact}>Location: {item.camp_location}</Text>
                        <Text style={globalStyle.bloodBankAdd}>Remark: {item.remark}</Text>
                    </View>
                
                }
            />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },

});

export default BloodDonationHistoryScreen
