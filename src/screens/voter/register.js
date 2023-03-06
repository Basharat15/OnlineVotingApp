import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  Alert,
} from 'react-native';
import Input from '../../components/input';
import CustomButton from '../../components/customButton';
import Theme from '../../utils/theme';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const VoterRegister = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userImage, setUserImage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerHandler = async () => {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        if (user) {
          console.log('user', user);
          firestore()
            .collection('voters')
            .doc()
            .set({
              name: name,
              phoneNumber: phoneNumber,
              email: email,
            })
            .then(res => {
              navigation.navigate('Voter Dashboard');
            })
            .catch(err => {
              console.log('Error', err);
            });
        }
      })
      .catch(err => {
        console.log('Error Message', err.message);
        Alert.alert('Error', err.message);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      {/* <Text style={styles.headingText}>Candidate Registration</Text> */}
      <ScrollView style={styles.centralContainer}>
        <Input placeHolder="Full Name" onChangeText={setName} />
        <Input placeHolder="Email" onChangeText={setEmail} />
        <Input placeHolder="Phone Number" onChangeText={setPhoneNumber} />
        <Input
          placeHolder="Password"
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <CustomButton
          title="Register"
          customStyle={{marginBottom: '5%'}}
          onPress={registerHandler}
        />
      </ScrollView>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>Already have account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Voter Login');
          }}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
      {/* <RBSheet
        ref={RBSheetRef}
        height={200}
        openDuration={250}
        closeDuration={200}
        customStyles={{
          container: {
            borderTopStartRadius: 40,
            borderTopEndRadius: 40,
          },
        }}>
        <View style={styles.sheetContainer}>
          <TouchableOpacity
            // activeOpacity={Theme.touchableOpacity}
            onPress={requestCameraPermission}
            style={styles.itemContainer}>
            <Image style={styles.imageContainer} source={Images.iconCamera} />
            <Text style={styles.txt}>Take a photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            // activeOpacity={Theme.touchableOpacity}
            onPress={selectImage}
            style={styles.itemContainer}>
            <Image style={styles.imageContainer} source={Images.iconGallery} />
            <Text style={styles.txt}>Choose from Gallery</Text>
          </TouchableOpacity>
        </View>
      </RBSheet> */}
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
  imageCircle: {
    width: 75,
    height: 75,
    backgroundColor: Theme.black,
    alignSelf: 'center',
    marginTop: '5%',
    borderRadius: 50,
    overflow: 'hidden',
  },
  bottomContainer: {
    marginTop: '45%',
    marginBottom: '15%',
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
  sheetContainer: {
    backgroundColor: Theme.white,
    flex: 1,
    padding: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: '45%',
    backgroundColor: '#F8F6F7',
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 20,
    padding: 20,
  },
  imageContainer: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  txt: {
    textAlign: 'center',
    marginVertical: 5,
    height: 40,
    color: Theme.black,
  },
});
export default VoterRegister;
