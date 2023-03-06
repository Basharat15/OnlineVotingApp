import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import CandidateCard from '../../components/candidateCard';
import firestore from '@react-native-firebase/firestore';
import Theme from '../../utils/theme';

const Candidates = () => {
  const [allCandidates, setAllCandidates] = useState([]);
  useEffect(() => {
    getDataFromFirebase();
  });
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: '100%',
    width: '100%',
    marginBottom: '20%',
  },
  header: {
    width: '95%',
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
});

export default Candidates;