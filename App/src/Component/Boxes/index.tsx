import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface IBoxesProps {
  letter: string;
}
export default function Boxes({letter}: IBoxesProps) {
  return (
    <View style={style.contianer}>
      <Text style={style.text}>{letter}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  contianer: {
    height: 30,
    width: 30,
    borderWidth: 1,
    margin: 5,
    borderColor: 'lightgrey',
  },
  text: {
    textAlign: 'center',
    flex: 1,
    color: 'black',
  },
});
