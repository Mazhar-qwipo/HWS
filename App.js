import React, { useEffect } from 'react'
import ProfileScreen from './screens/Profile';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/Splash';
import DashboardHomeScreen from './screens/DashboardHome';
import { navigationRef } from './RootNavigation';
import SignInScreen from './screens/SignIn';
import SignUpScreen from './screens/SignUp';
import Loader from './loader';
import GlobalStateStore from './GlobalStateStore'
import PageDynamicScreen from './screens/pageDynamic';
import ForgotPassword from './screens/ForgotPassword';
import BloodBankScreen from './screens/bloodBank';
import BloodDonationDashboardScreen from './screens/BloodDonationDashboard';
import CoordinatorsScreen from './screens/coordinators';
import BloodDonationHistoryScreen from './screens/bloodDonationHistory';
import BloodRequestScreen from './screens/BloodRequest';
import MoreServicesScreen from './screens/MoreServices';
import NotificationScreen from './screens/Notification';
import ChangePasswordScreen from './screens/ChangePassword';
const Stack = createNativeStackNavigator();

export default function App() {
  const [loaing, setLoading] = React.useState(true);
// global variable https://www.savaslabs.com/blog/using-react-global-state-hooks-and-context
  //setLoading(true);
  useEffect(() => {
    
    let timeout = setTimeout(function() {
      setLoading(false);
      //clearTimeout(timeout);
      timeout=null;
    }, 3000);

    // return () => {
    //   clearTimeout(timeout);
    // };
  });
  
  
  // ...elsewhere...
  
  // if (this.timeout) {
  //   clearTimeout(this.timeout)
  //   this.timeout = null
  // }
  return (
    <GlobalStateStore style={{ flex: 1 }}>
      <Loader loading={loaing} />
      <NavigationContainer ref={navigationRef} independent={true}>
        <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="DashboardHomeScreen" component={DashboardHomeScreen} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="PageDynamicScreen" component={PageDynamicScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="BloodDonationDashboardScreen" component={BloodDonationDashboardScreen} />
          <Stack.Screen name="BloodBankScreen" component={BloodBankScreen} />
          <Stack.Screen name="CoordinatorsScreen" component={CoordinatorsScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="BloodDonationHistoryScreen" component={BloodDonationHistoryScreen} />
          <Stack.Screen name="BloodRequestScreen" component={BloodRequestScreen} />
          <Stack.Screen name="MoreServicesScreen" component={MoreServicesScreen} />
          <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
          <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalStateStore>
  );
}


