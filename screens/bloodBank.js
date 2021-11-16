import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Input, StyleSheet, Alert, Image, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyle } from '../assets/styles/globalStyle';
import getBloodBanks from '../services/bloodDonationDataService';
import { Context } from '../GlobalStateStore';
import { isEmptyValue } from '../services/commonServices';
import { APP_CONSTANT } from '../constants';
import HTMLView from 'react-native-htmlview';

function BloodBankScreen({ navigation: { navigate }, route: { params } }) {
    const [state, setState] = useContext(Context);
    const [bloodBanksList, setBloodBanks] = useState();
    useEffect(() => {
        getBloodBankList();

    }, []);

    async function getBloodBankList() {
        setState({ isLoading: true });
        let listData = await getBloodBanks();
        setState({ isLoading: false });
        if (listData.status == 200 && listData.data.length > 0) {
            setBloodBanks(listData.data);
        } else {
            Alert.alert(listData.message);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={[globalStyle.row, globalStyle.pageHeader]}>
                <View style={globalStyle.listPageTitleBar}>
                    <Text style={globalStyle.pageHeading}>Blood Banks</Text>
                </View>
                <View style={globalStyle.pageIcon}>
                    <Image
                        style={globalStyle.pageIconImage}
                        resizeMode="contain"
                        source={require('../assets/img/KTF.png')}
                    />
                </View>
            </View>
            <FlatList
            style={globalStyle.marginBottom5}
                data={bloodBanksList}
                renderItem={({ item }) => 
                    <View style={globalStyle.listCard}>
                        <Text style={globalStyle.bloodBankName}>{item.blood_bank_name}</Text>
                        <Text style={globalStyle.bloodBankContact}>Contact: {item.mobileno}</Text>
                        <Text style={globalStyle.bloodBankAdd}>Add. : {item.address}</Text>
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

export default BloodBankScreen
