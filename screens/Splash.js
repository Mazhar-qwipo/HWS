import React from 'react'
import { View, Text, Image } from 'react-native'
import { splashStyle } from '../assets/styles/splashStyle'
function SplashScreen({ navigation }) {
  setTimeout(() => {
        navigation.replace('DashboardHomeScreen');
        
    }, 3000);
    return (
        <View style={splashStyle.mainView}>
            <Image
                style={splashStyle.splashImage}
                source={require('../assets/img/splashscreenLogo.png')}
            />
            {/* <Text style={splashStyle.splashHeading1}>HUSAINI</Text> */}
            <Text style={splashStyle.splashHeading2}>HUSAINI BLOOD DONATION CLUB</Text>
        </View>
    )
}
export default SplashScreen