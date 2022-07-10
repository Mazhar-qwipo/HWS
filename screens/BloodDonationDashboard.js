import React from 'react'
import { View, Text, StyleSheet, Image, Alert } from 'react-native'
import { gridCardStyle } from '../assets/styles/gridcardstyle.js'
import { globalStyle } from '../assets/styles/globalStyle.js'
import { navigationRef } from '../RootNavigation';
import * as RootNavigation from '../RootNavigation';
import { Button } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function BloodDonationDashboardScreen() {

    return (
        <View style={globalStyle.container}>
            <View style={globalStyle.headingContainer}>
                <Text style={globalStyle.heading1}>HUSAINI WELFARE SOCITY</Text>
            </View>
            <View style={gridCardStyle.bloodDonationGrid}>
                <TouchableOpacity onPress={() => RootNavigation.navigate('BloodBankScreen', { pageName: 'BB' })}>
                    <View style={gridCardStyle.item}>
                        <Image
                            style={gridCardStyle.image}
                            resizeMode="contain"
                            source={require('../assets/img/BLOODBANKS.png')}
                        />
                        <View style={gridCardStyle.textView}>
                            <Text style={gridCardStyle.text}>BLOOD BANKS</Text>

                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => RootNavigation.navigate('NotificationScreen')}>
                    <View style={gridCardStyle.item}>
                        <Image
                            style={gridCardStyle.image}
                            resizeMode="contain"
                            source={require('../assets/img/BLOODCAMP.png')}
                        />
                        <View style={gridCardStyle.textView}>
                            <Text style={gridCardStyle.text}>BLOOD CAMPS</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => RootNavigation.navigate('CoordinatorsScreen', { pageName: 'CO' })}>
                    <View style={gridCardStyle.item}>
                        <Image
                            style={gridCardStyle.image}
                            resizeMode="contain"
                            source={require('../assets/img/COORDINATORS-R.png')}
                        />
                        <View style={gridCardStyle.textView}>
                            <Text style={gridCardStyle.text}>COORDINATORS</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => RootNavigation.navigate('BloodDonationHistoryScreen')}>
                    <View style={gridCardStyle.item}>
                        <Image
                            style={gridCardStyle.image}
                            resizeMode="contain"
                            source={require('../assets/img/MYDONATIONS.png')}
                        />
                        <View style={gridCardStyle.textView}>
                            <Text style={gridCardStyle.text}>MY DONATIONS</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => RootNavigation.navigate('ProfileScreen', { pageName: 'Profile' })}>
                    <View style={gridCardStyle.item}>
                        <Image
                            style={gridCardStyle.image}
                            resizeMode="contain"
                            source={require('../assets/img/BLOODCAMP.png')}
                        />
                        <View style={gridCardStyle.textView}>
                            <Text style={gridCardStyle.text}>PROFILE</Text>
                        </View>
                    </View>
                </TouchableOpacity> */}
            </View>

        </View>
    )
}


