import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Input, StyleSheet, Alert, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyle } from '../assets/styles/globalStyle';
import getPage from '../services/pageService';
import { Context } from '../GlobalStateStore';
import { ScrollView } from 'react-native-gesture-handler';
import { isEmptyValue } from '../services/commonServices';
import { APP_CONSTANT } from '../constants';
import HTMLView from 'react-native-htmlview';

function PageDynamicScreen({ navigation: { navigate }, route: { params } }) {
    const [state, setState] = useContext(Context);
    const [titleIcon, setTitleIcon] = useState(params.pageName);

    const [pageData, setPageDetail] = useState({ id: '', page_name: '', page_title: 'Loading...', page_detail: '', updated_at: '' });
    useEffect(() => {
        setTitleIcon(params.pageName);
        console.log("titleIcon- ", titleIcon);
        getPageData(params.pageName);

    }, []);

    async function getPageData(pageName) {
        setState({ isLoading: true });
        let page = await getPage(isEmptyValue(pageName) ? "HAS" : pageName);
        setState({ isLoading: false });
        if (page.status == 200 && page.data.length > 0) {
            setPageDetail(page.data[0]);
            //console.log(APP_CONSTANT.baseUrl + '/assets/uploads/' + page.data[0].page_image);
        } else {
            Alert.alert("Data Not Available!");
        }
    }
    function ImageIcon(props) {

        const imgType = props.type;
        console.log("imgType - ",imgType);
        if (imgType == 'HAS') {
            return <Image
                style={globalStyle.pageIconImage}
                resizeMode="contain"
                source={require('../assets/img/HAS.png')}
            />;
        } else if (imgType == 'HVCT') {
            return <Image
                style={globalStyle.pageIconImage}
                resizeMode="contain"
                source={require('../assets/img/HVCT.png')}
            />;
        } else if (imgType == 'KTF') {
            return <Image
                style={globalStyle.pageIconImage}
                resizeMode="contain"
                source={require('../assets/img/KTF.png')}
            />;
        } else {
            
            return <Image
                style={globalStyle.pageIconImage}
                resizeMode="contain"
                source={require('../assets/img/HVCT.png')}
            />;
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={[globalStyle.row, globalStyle.pageHeader]}>
                <View style={globalStyle.pageTitleBar}>
                    <Text style={globalStyle.pageHeading}>{pageData.page_name}</Text>
                    <Text style={globalStyle.subHeading1}>{pageData.page_title}</Text>
                </View>
                <View globalStyle={styles.pageIcon}>
                    <ImageIcon type={titleIcon} />
                </View>
            </View>
            <ScrollView style={globalStyle.pagrScrollView}>
                <Image
                    style={globalStyle.pageImage}
                    resizeMode="contain"
                    source={{ uri: APP_CONSTANT.baseUrl + '/assets/uploads/' + pageData.page_image }}
                />
                <HTMLView stylesheet={globalStyle.pageDetail} value={pageData.page_detail}></HTMLView>
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },

});

export default PageDynamicScreen
