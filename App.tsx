/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppRoutes from './App/src/Navigation';
import {STACKS} from './App/src/Navigation/stacks';
import {Provider} from 'react-redux';
import {store} from './App/src/Store';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppRoutes stacks={STACKS} />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
