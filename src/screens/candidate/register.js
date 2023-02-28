import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import Input from '../../components/input';
import CustomButton from '../../components/customButton';
import Theme from '../../utils/theme';
import {useNavigation} from '@react-navigation/native';

const CandidateRegister = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [image, setImage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <KeyboardAvoidingView style={styles.container}>
      {/* <Text style={styles.headingText}>Candidate Registration</Text> */}
      <ScrollView style={styles.centralContainer}>
        <TouchableOpacity style={styles.imageContainer}>
          {/* <Image source={require('../../assets/Images/userIcon.png')} /> */}
        </TouchableOpacity>
        <Input placeHolder="Full Name" onChangeText={setName} />
        <Input placeHolder="Email" onChangeText={setEmail} />
        <Input placeHolder="Phone Number" onChangeText={setPhoneNumber} />
        <Input
          placeHolder="Password"
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <CustomButton title="Register" customStyle={{marginBottom: '5%'}} />
      </ScrollView>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>Already have account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Candidate Login');
          }}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Theme.black,
    marginTop: '5%',
  },
  centralContainer: {
    width: '85%',
    marginTop: '10%',
    paddingHorizontal: '5%',
    shadowColor: '#000000',
    elevation: 2,
    borderRadius: 2,
  },
  imageContainer: {
    width: 75,
    height: 75,
    backgroundColor: 'red',
    alignSelf: 'center',
    marginTop: '5%',
    borderRadius: 50,
  },
  bottomContainer: {
    marginVertical: '15%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomText: {
    color: Theme.black,
    fontSize: 17,
  },
  loginText: {
    color: Theme.primary,
    fontSize: 17,
  },
});
export default CandidateRegister;
