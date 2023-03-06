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
import {RESULT_STATE} from '../../redux/result/getState';
import {useSelector} from 'react-redux';

const CandidateResult = () => {
  const [allCandidates, setAllCandidates] = useState([]);
  const result = useSelector(RESULT_STATE.result);

  const navigation = useNavigation();
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
      {result ? (
        <FlatList
          data={allCandidates}
          renderItem={renderCandidateCard}
          keyExtractor={item => item.id}
        />
      ) : (
        <View style={{marginTop: '40%'}}>
          <Text style={{textAlign: 'center'}}>
            The result is not posted by admin yet
          </Text>
        </View>
      )}
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

export default CandidateResult;
