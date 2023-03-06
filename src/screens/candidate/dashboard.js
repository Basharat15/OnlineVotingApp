import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import CandidateCard from '../../components/candidateCard';
import firestore from '@react-native-firebase/firestore';
import Theme from '../../utils/theme';
import auth from '@react-native-firebase/auth';

import {useNavigation} from '@react-navigation/native';

const CandidateDashboard = () => {
  const [allCandidates, setAllCandidates] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    getDataFromFirebase();
  });
  const logoutHandler = async () => {
    await auth()
      .signOut()
      .then(() => {
        navigation.navigate('WellCome');
      })
      .catch(error => Alert.alert('Error', error));
  };

  const getDataFromFirebase = async () => {
    await firestore()
      .collection('candidates')
      .get()
      .then(res => {
        setAllCandidates(res.docs);
      });
  };
  const renderCandidateCard = ({item}) => {
    return (
      <CandidateCard
        candidateName={item._data.name}
        candidateEmail={item._data.email}
        candidatePhoneNumber={item._data.phoneNumber}
        candidateImageUrl={item._data.imgUrl}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headingText}>All Candidates</Text>
      </View>
      <FlatList
        data={allCandidates}
        renderItem={renderCandidateCard}
        keyExtractor={item => item.id}
      />
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerContainer}
          onPress={() => {
            navigation.navigate('Candidate Result');
          }}>
          <Text style={styles.headingText}>Check Result</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerContainer}
          onPress={logoutHandler}>
          <Text style={styles.headingText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: '100%',
    width: '100%',
    marginBottom: '35%',
  },
  header: {
    width: '95%',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: Theme.primary,
    paddingVertical: '2%',
    marginVertical: '2%',
  },
  footerContainer: {
    width: '48%',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: Theme.primary,
    paddingVertical: '2%',
    marginVertical: '2%',
  },
  headingText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: Theme.white,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default CandidateDashboard;
