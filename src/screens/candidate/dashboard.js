import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import CandidateCard from '../../components/candidateCard';

const CandidateDashboard = () => {
  const candidates = [
    {
      id: 1,
      name: 'Basharat Abbas',
      email: 'basharatabbas514@gmail.com',
      phoneNumber: '03035880745',
    },
    {
      id: 2,
      name: 'Basharat Abbas',
      email: 'basharatabbas514@gmail.com',
      phoneNumber: '03035880745',
    },
    {
      id: 3,
      name: 'Basharat Abbas',
      email: 'basharatabbas514@gmail.com',
      phoneNumber: '03035880745',
    },
    {
      id: 4,
      name: 'Basharat Abbas',
      email: 'basharatabbas514@gmail.com',
      phoneNumber: '03035880745',
    },
    {
      id: 5,
      name: 'Basharat Abbas',
      email: 'basharatabbas514@gmail.com',
      phoneNumber: '03035880745',
    },
  ];
  const renderCandidateCard = ({item}) => {
    return (
      <CandidateCard
        candidateName={item.name}
        candidateEmail={item.email}
        candidatePhoneNumber={item.phoneNumber}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headingText}>All Candidates</Text>
      </View>
      <FlatList
        data={candidates}
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
  },
  header: {
    width: '95%',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: 'red',
    paddingVertical: '2%',
    marginVertical: '2%',
  },
  headingText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default CandidateDashboard;
