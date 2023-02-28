import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WellCome from '../screens/wellcome';
import AdminRegister from '../screens/admin/register';
import AdminLogin from '../screens/admin/login';
import CandidateRegister from '../screens/candidate/register';
import CandidateLogin from '../screens/candidate/login';
import VoterRegister from '../screens/voter/register';
import VoterLogin from '../screens/voter/login';

const MainStack = createNativeStackNavigator();
const WellComeStack = createNativeStackNavigator();
const AdminStack = createNativeStackNavigator();
const CandidateStack = createNativeStackNavigator();
const VoterStack = createNativeStackNavigator();

function WellComeScreens() {
  return (
    <WellComeStack.Navigator
      initialRouteName="WellCome"
      screenOptions={{headerShown: false}}>
      <WellComeStack.Screen
        name="WellCome"
        component={WellCome}
        options={{title: 'WellCome Here'}}
      />
      <WellComeStack.Screen
        name="Candidate Login"
        component={CandidateScreens}
      />
      <WellComeStack.Screen name="Voter Login" component={VoterScreens} />
      <WellComeStack.Screen name="Admin Login" component={AdminScreens} />
    </WellComeStack.Navigator>
  );
}

function AdminScreens() {
  return (
    <AdminStack.Navigator
      initialRouteName="AdminLogin"
      screenOptions={{headerShown: false}}>
      <AdminStack.Screen name="AdminRegister" component={AdminRegister} />
      <AdminStack.Screen name="AdminLogin" component={AdminLogin} />
    </AdminStack.Navigator>
  );
}

function CandidateScreens() {
  return (
    <CandidateStack.Navigator
      initialRouteName="Candidate Login"
      screenOptions={{headerShown: true}}>
      <CandidateStack.Screen
        name="Candidate Register"
        component={CandidateRegister}
        options={{title: 'Candidate Registration'}}
      />
      <CandidateStack.Screen
        name="Candidate Login"
        component={CandidateLogin}
        options={{title: 'Candidate Login'}}
      />
    </CandidateStack.Navigator>
  );
}

function VoterScreens() {
  return (
    <VoterStack.Navigator
      initialRouteName="VoterLogin"
      screenOptions={{headerShown: false}}>
      <VoterStack.Screen name="Voter Register" component={VoterRegister} />
      <VoterStack.Screen name="VoterLogin" component={VoterLogin} />
    </VoterStack.Navigator>
  );
}
const Index = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="WellComeStack"
        screenOptions={{headerShown: false}}>
        <MainStack.Screen name="WellComeStack" component={WellComeScreens} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
export default Index;
