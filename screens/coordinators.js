import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Input, StyleSheet, Alert, Image, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyle } from '../assets/styles/globalStyle';
import {getCoordinators} from '../services/bloodDonationDataService';
import { Context } from '../GlobalStateStore';


function CoordinatorsScreen({ navigation: { navigate }, route: { params } }) {
    const [state, setState] = useContext(Context);
    const [coordinatorsList, setCoordinators] = useState();
    useEffect(() => {
        getCoordinatorsList();

    }, []);

    async function getCoordinatorsList() {
        setState({ isLoading: true });
        let listData = await getCoordinators();
        setState({ isLoading: false });
        if (listData.status == 200 && listData.data.length > 0) {
            setCoordinators(listData.data);
        } else {
            Alert.alert(listData.message);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={[globalStyle.row, globalStyle.pageHeader]}>
                <View style={globalStyle.listPageTitleBar}>
                    <Text style={globalStyle.listPageHeading}>CO-ORDINATORS LIST</Text>
                </View>
                <View style={globalStyle.pageIcon}>
                    <Image
                        style={globalStyle.pageIconImage}
                        resizeMode="contain"
                        source={require('../assets/img/COORDINATORS.png')}
                    />
                </View>
            </View>
            <FlatList
            style={globalStyle.marginBottom5}
                data={coordinatorsList}
                renderItem={({ item }) => 
                    <View style={globalStyle.listCard}>
                        <Text style={globalStyle.bloodBankName}>{item.name}</Text>
                        <Text style={globalStyle.bloodBankContact}>Contact: {item.contact}</Text>
                        <Text style={globalStyle.bloodBankContact}>Email-Id: {item.email}</Text>
                        <Text style={globalStyle.bloodBankAdd}>Location: {item.state_name}, {item.city_name}</Text>
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

export default CoordinatorsScreen
