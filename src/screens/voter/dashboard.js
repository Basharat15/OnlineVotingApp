import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import CandidateCard from '../../components/candidateCard';
import firestore from '@react-native-firebase/firestore';
import Theme from '../../utils/theme';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {setResult} from '../../redux/result/resultAction';
import {useDispatch} from 'react-redux';

const VoterDashboard = () => {
  const [allCandidates, setAllCandidates] = useState([]);
  const dispatch = useDispatch();
  const [voted, setVoted] = useState(false);
  const navigation = useNavigation();
  const logoutHandler = async () => {
    await auth()
      .signOut()
      .then(() => {
        navigation.navigate('WellCome');
      })
      .catch(error => Alert.alert('Error', error));
  };
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
          title={voted ? 'Vote Casted' : 'Cast Vote'}
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
            dispatch(setResult(false));
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

export default VoterDashboard;
