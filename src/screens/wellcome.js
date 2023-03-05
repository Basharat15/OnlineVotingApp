import React, {useEffect} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Theme from '../utils/theme';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const WellCome = () => {
  const navigation = useNavigation();
  useEffect(() => {
    myfuction();
  });
  const myfuction = async () => {
    try {
      const getData = await firestore()
        .collection('users')
        .doc('1')
        .get()
        .then(res => {
          console.log('This is data from firestore', res);
        });
      console.log('data', getData);
    } catch {
      err => {
        console.log('er', err);
      };
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Continue as</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Candidate Login');
        }}>
        <Text style={styles.buttonText}>Candidate</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Voter Login');
        }}>
        <Text style={styles.buttonText}>Voter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Admin Login');
        }}>
        <Text style={styles.buttonText}>Admin</Text>
      </TouchableOpacity>
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
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Theme.black,
    marginTop: '40%',
  },
  button: {
    backgroundColor: Theme.primary,
    paddingVertical: '5%',
    width: '80%',
    marginTop: '15%',
    borderRadius: 10,
  },
  buttonText: {
    color: Theme.white,
    textAlign: 'center',
  },
});
export default WellCome;
