import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Alert} from 'react-native';
import Theme from '../../utils/theme';
import Input from '../../components/input';
import CustomButton from '../../components/customButton';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const VoterLogin = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginHandler = async () => {
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log('user', user);
        if (user) {
          navigation.navigate('Voter Dashboard');
        }
      })
      .catch(err => {
        console.log('Err', err);
        Alert.alert('Error', err.message);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Voter Login</Text>
      <View style={styles.centerContainer}>
        <Input placeHolder="Email" onChangeText={setEmail} />
        <Input
          placeHolder="Password"
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <CustomButton title="Login" onPress={loginHandler} />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>Don't have account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Voter Register');
          }}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  headingText: {
    textAlign: 'center',
    color: Theme.black,
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: '30%',
    marginBottom: '10%',
  },
  centerContainer: {
    width: '85%',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    shadowColor: '#000000',
    elevation: 2,
    borderRadius: 2,
  },
  bottomContainer: {
    marginTop: '50%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomText: {
    fontSize: 17,
  },
  registerText: {
    color: Theme.primary,
    fontSize: 17,
  },
});
export default VoterLogin;
