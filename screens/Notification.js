import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Input, StyleSheet, Alert, Image, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyle } from '../assets/styles/globalStyle';
import { newsListService } from '../services/commonServices';
import { Context } from '../GlobalStateStore';
function NotificationScreen() {
    const [state, setState] = useContext(Context);
    const [newsList, setNewsList] = useState();
    useEffect(() => {
        getNewsList();

    }, []);
    async function getNewsList() {
        setState({ isLoading: true });
        let listData = await newsListService();
        setState({ isLoading: false });
        if (listData.status == 200 && listData.data.length > 0) {
            setNewsList(listData.data);
        } else {
            Alert.alert(listData.message);
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={[globalStyle.row, globalStyle.pageHeader]}>
                <View style={globalStyle.listPageTitleBar}>
                    <Text style={globalStyle.listPageHeading}>NEWS AND NOTIFICATIONS</Text>
                </View>
                <View style={globalStyle.pageIcon}>
                    <Image
                        style={globalStyle.pageIconImage}
                        resizeMode="contain"
                        source={require('../assets/img/bell.png')}
                    />
                </View>
            </View>
            <FlatList
                style={globalStyle.marginBottom5}
                data={newsList}
                renderItem={({ item }) =>
                    <View style={globalStyle.listCard}>
                        <Text style={globalStyle.bloodBankName}>{item.title}</Text>
                        <View style={globalStyle.rowText}>
                            <Text style={globalStyle.label}>Detail:</Text>
                            <Text style={globalStyle.bloodBankContact}>{item.detail}</Text>
                        </View>
                        <View style={globalStyle.rowText}>
                            <Text style={globalStyle.label}>Date: </Text>
                            <Text style={globalStyle.bloodBankAdd}>{item.expiration}</Text>
                        </View>

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
export default NotificationScreen