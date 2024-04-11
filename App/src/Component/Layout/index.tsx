import React from 'react';
import {StyleSheet, View} from 'react-native';

interface ILayoutProps {
  children: any;
}
export default function Layout({children}: ILayoutProps) {
  return <View style={style.container}>{children}</View>;
}

const style = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
});
