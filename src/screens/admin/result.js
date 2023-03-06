import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import ResultCard from '../../components/resultCard';
import firestore from '@react-native-firebase/firestore';
import Theme from '../../utils/theme';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setResult} from '../../redux/result/resultAction';
import {RESULT_STATE} from '../../redux/result/getState';

const Result = () => {
  const [allCandidates, setAllCandidates] = useState([]);
  const result = useSelector(RESULT_STATE.result);
  const dispatch = useDispatch();
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
      <ResultCard
        candidateName={item._data.name}
        candidateEmail={item._data.email}
        candidatePhoneNumber={item._data.phoneNumber}
        candidateImageUrl={item._data.imgUrl}
        candidateVotes={item._data.votes}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headingText}>Candidates Result</Text>
      </View>
      <FlatList
        data={allCandidates}
        renderItem={renderCandidateCard}
        keyExtractor={item => item.id}
      />
      <View style={styles.footer}>
        <TouchableOpacity
          disabled={result ? true : false}
          style={styles.footerContainer}
          onPress={() => {
            dispatch(setResult(true));
          }}>
          <Text style={styles.headingText}>
            {result ? 'Result Posted' : 'Post Result'}
          </Text>
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

export default Result;
