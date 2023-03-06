import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Index from './src/navigation';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <>
        <Index />
      </>
    </Provider>
  );
};

export default App;
