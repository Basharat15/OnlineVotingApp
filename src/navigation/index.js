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
import CandidateDashboard from '../screens/candidate/dashboard';
import VoterDashboard from '../screens/voter/dashboard';
import AdminDashboard from '../screens/admin/dashboard';
import CandidateResult from '../screens/candidate/result';
import Result from '../screens/voter/result';

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
      initialRouteName="Admin Login"
      screenOptions={{headerShown: true}}>
      <AdminStack.Screen name="Admin Register" component={AdminRegister} />
      <AdminStack.Screen name="Admin Login" component={AdminLogin} />
      <AdminStack.Screen
        name="Admin Dashboard"
        component={AdminDashboard}
        options={{title: 'Admin Dashboard'}}
      />
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
      <CandidateStack.Screen
        name="Candidate Dashboard"
        component={CandidateDashboard}
        options={{title: 'Candidate Dashboard'}}
      />
      <CandidateStack.Screen
        name="Candidate Result"
        component={CandidateResult}
        options={{title: 'Candidate Result'}}
      />
    </CandidateStack.Navigator>
  );
}

function VoterScreens() {
  return (
    <VoterStack.Navigator
      initialRouteName="Voter Login"
      screenOptions={{headerShown: true}}>
      <VoterStack.Screen
        name="Voter Register"
        component={VoterRegister}
        options={{title: 'Voter Registration'}}
      />
      <VoterStack.Screen name="Voter Login" component={VoterLogin} />
      <VoterStack.Screen
        name="Voter Dashboard"
        component={VoterDashboard}
        options={{title: 'Voter Dashboard'}}
      />
      <VoterStack.Screen
        name="Candidate Result"
        component={CandidateResult}
        options={{title: 'Candidate Result'}}
      />
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
