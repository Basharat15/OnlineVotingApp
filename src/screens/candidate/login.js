import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Theme from '../../utils/theme';
import Input from '../../components/input';
import CustomButton from '../../components/customButton';
import {useNavigation} from '@react-navigation/native';

const CandidateLogin = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Candidate Login</Text>
      <View style={styles.centerContainer}>
        <Input placeHolder="Email" onChangeText={setEmail} />
        <Input
          placeHolder="Password"
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <CustomButton
          title="Login"
          onPress={() => {
            navigation.navigate('Candidate Dashboard');
          }}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>Don't have account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Candidate Register');
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
export default CandidateLogin;
