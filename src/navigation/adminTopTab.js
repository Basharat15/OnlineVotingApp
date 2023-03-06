// import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Theme from '../utils/theme';
import Result from '../screens/admin/result';
import Candidates from '../screens/admin/candidates';

const Tab = createMaterialTopTabNavigator();
const AdminTopTab = () => {
  return (
    <Tab.Navigator
    // screenOptions={{
    //   tabBarActiveTintColor: 'black',
    //   tabBarInactiveTintColor: 'gray',

    //   tabBarStyle: {
    //     backgroundColor: 'transparent',
    //   },
    //   tabBarLabelStyle: {
    //     fontWeight: 'bold',
    //   },
    //   tabBarIndicatorStyle: {
    //     backgroundColor: 'red',
    //     borderBottomWidth: 5,
    //     height: 50,
    //     width: '35%',
    //     marginStart: '6%',
    //   },
    // }}
    >
      <Tab.Screen name="Candidates" component={Candidates} />
      <Tab.Screen name="Result" component={Result} />
    </Tab.Navigator>
  );
};

export default AdminTopTab;
