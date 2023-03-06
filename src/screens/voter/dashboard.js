import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import CandidateCard from '../../components/candidateCard';
import firestore from '@react-native-firebase/firestore';

const VoterDashboard = () => {
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
  const [allCandidates, setAllCandidates] = useState([]);
  const [voted, setVoted] = useState(false);
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
      <View>
        <CandidateCard
          candidateName={item._data.name}
          candidateEmail={item._data.email}
          candidatePhoneNumber={item._data.phoneNumber}
          candidateImageUrl={item._data.imgUrl}
          cardButton={true}
          title={'Cast Vote'}
          buttonDisabled={voted ? true : false}
          onButtonPress={() => {
            firestore()
              .collection('candidates')
              .doc(item._data.email)
              .get()
              .then(res => {
                let vote = res.data().votes;
                let increment = vote + 1;
                firestore()
                  .collection('candidates')
                  .doc(item._data.email)
                  .update({
                    votes: increment,
                  });
              });
            setVoted(true);
          }}
        />
      </View>
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

export default VoterDashboard;
