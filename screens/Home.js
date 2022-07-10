import React from 'react'
import { View, Text, StyleSheet, Image, Alert } from 'react-native'
import { gridCardStyle } from '../assets/styles/gridcardstyle.js'
import { globalStyle } from '../assets/styles/globalStyle.js'
import { navigationRef } from '../RootNavigation';
import * as RootNavigation from '../RootNavigation';
import { Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function HomeScreen() {
    const link = '../assets/favicon.png';


    return (
        <View style={globalStyle.container}>
            <View style={globalStyle.headingContainer}>
                <Text style={globalStyle.heading1}>HUSAINI BLOOD DONATION CLUB</Text>
            </View>
            <View style={gridCardStyle.homeGrid}>
                <TouchableOpacity onPress={() => RootNavigation.navigate('SignInScreen')}>
                    <View style={gridCardStyle.item}>
                        <Image
                            style={gridCardStyle.image}
                            resizeMode="contain"
                            source={require('../assets/img/HBDC-R.png')}
                        />
                        <View style={gridCardStyle.textView}>
                            <Text style={gridCardStyle.text}>HBDC</Text>
                            <Text style={gridCardStyle.textDescription}>REGISTRATION</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => RootNavigation.navigate('BloodRequestScreen')}>
                    <View style={gridCardStyle.item}>
                        <Image
                            style={gridCardStyle.image}
                            resizeMode="contain"
                            source={require('../assets/img/BLOODBANKS.png')}
                        />
                        <View style={gridCardStyle.textView}>
                            <Text style={gridCardStyle.text}>HBDC</Text>
                            <Text style={gridCardStyle.textDescription}>BLOOD REQUEST</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => RootNavigation.navigate('MoreServicesScreen')}>
                    <View style={gridCardStyle.item}>
                        <Image
                            style={gridCardStyle.image}
                            resizeMode="contain"
                            source={require('../assets/img/HVCT-R.png')}
                        />
                        <View style={gridCardStyle.textView}>
                            <Text style={gridCardStyle.text}>MORE SERVICES</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                {/* <TouchableOpacity onPress={() => RootNavigation.navigate('PageDynamicScreen', { pageName: 'HVTC' })}>
                    <View style={gridCardStyle.item}>
                        <Image
                            style={gridCardStyle.image}
                            resizeMode="contain"
                            source={require('../assets/img/HVCT-R.png')}
                        />
                        <View style={gridCardStyle.textView}>
                            <Text style={gridCardStyle.text}>HVTC</Text>
                            <Text style={gridCardStyle.textDescription}>HUSAINI VOCATIONAL TRAINING CENTRE</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => RootNavigation.navigate('PageDynamicScreen', { pageName: 'KTF' })}>
                    <View style={gridCardStyle.item}>
                        <Image
                            style={gridCardStyle.image}
                            resizeMode="contain"
                            source={require('../assets/img/KTF-R.png')}
                        />
                        <View style={gridCardStyle.textView}>
                            <Text style={gridCardStyle.text}>KTF</Text>
                            <Text style={gridCardStyle.textDescription}>KHADIJAH TRADE FARE</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => RootNavigation.navigate('SignInScreen')}>
                    <View style={gridCardStyle.item}>
                        <Image
                            style={gridCardStyle.image}
                            resizeMode="contain"
                            source={require('../assets/img/HBDC-R.png')}
                        />
                        <View style={gridCardStyle.textView}>
                            <Text style={gridCardStyle.text}>HBDC</Text>
                            <Text style={gridCardStyle.textDescription}>BLOOD DONAION</Text>
                        </View>
                    </View>
                </TouchableOpacity> */}
            </View>

        </View>
    )
}


