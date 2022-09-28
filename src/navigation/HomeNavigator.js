import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PackageScreen from '../screens/Packages/PackageScreen/PackageScreen';
import MyServices from '../screens/MyServices/MyServices';
import ServiceOrders from '../screens/ServiceOrders/ServiceOrders';
import ManageOrders from '../screens/ManageOrders/ManageOrders';
import RecentWorks from '../screens/RecentWorks/RecentWorks';
import Home from '../screens/Home/Home';
import {
  ACCOUNT_SCREEN,
  HOME_SCREEN,
  MANAGE_ORDERS_SCREEN,
  PackageSubscription,
  PACKAGE_SCREEN,
  RECENT_WORKS_IMAGEDETAIL_SCREEN,
  RECENT_WORKS_SCREEN,
  SERVICE_ORDERS_SCREEN,
  SERVICE_SCREEN,
} from '../constants/screens';
import AccountScreen from '../screens/Account/AccountScreen';
import BottomTabs from './TabNav';
import RecentWorkImageDetail from '../screens/RecentWorks/RecentWorkImageDetails';
import PackageSubscriptionScreen from '../screens/Packages/PackageSubcriptionScreen/PackageSubscriptionScreen';

const Stack = createNativeStackNavigator();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name={HOME_SCREEN} component={BottomTabs} />
      <Stack.Screen name={ACCOUNT_SCREEN} component={AccountScreen} />

      <Stack.Screen name={SERVICE_SCREEN} component={MyServices} />
      <Stack.Screen name={SERVICE_ORDERS_SCREEN} component={ServiceOrders} />
      <Stack.Screen name={MANAGE_ORDERS_SCREEN} component={ManageOrders} />
      <Stack.Screen name={PACKAGE_SCREEN} component={PackageScreen} />
      <Stack.Screen
        name={PackageSubscription}
        component={PackageSubscriptionScreen}
      /> */}
      <Stack.Screen name={RECENT_WORKS_SCREEN} component={RecentWorks} />
      <Stack.Screen
        name={RECENT_WORKS_IMAGEDETAIL_SCREEN}
        component={RecentWorkImageDetail}
      />
    </Stack.Navigator>
  );
};
