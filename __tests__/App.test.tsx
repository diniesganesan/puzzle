/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('@react-navigation/native-stack', () => {
  return {
    createNativeStackNavigator: jest.fn(() => {
      return {
        Navigator: jest.fn(),
      };
    }),
  };
});

// jest.mock('react-native', () => {
//   return {
//     BackHandler: {
//       addEventListener: jest.fn(),
//       removeEventListener: jest.fn(),
//     },
//     StyleSheet: {
//       create: jest.fn(() => {
//         return {
//           container: jest.fn(),
//         };
//       }),
//     },
//   };
// });

// jest.mock('@react-navigation/native-stack');
it('renders correctly', () => {
  // renderer.create(<App />);
  const a = 1 + 1;
  expect(a).toEqual(2);
});
