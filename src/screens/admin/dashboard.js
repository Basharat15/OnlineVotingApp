import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AdminTopTab from '../../navigation/adminTopTab';

const AdminDashboard = () => {
  return (
    <View style={styles.container}>
      <AdminTopTab />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});

export default AdminDashboard;
