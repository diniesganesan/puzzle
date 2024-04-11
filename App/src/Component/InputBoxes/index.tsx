import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {useInputBoxesHook} from '../../CustomHooks';

interface IInputBoxesProps {
  value: string;
  userInputs: string[];
  position: number;
  onHandleText: (e: string[]) => void;
}
export default function InputBoxes({
  value,
  userInputs,
  onHandleText,
  position,
}: IInputBoxesProps) {
  const {handleOnChangeText} = useInputBoxesHook(
    userInputs,
    position,
    onHandleText,
  );
  return (
    <TextInput
      value={value}
      onChangeText={handleOnChangeText}
      autoComplete="off"
      autoCapitalize="characters"
      maxLength={1}
      style={style.text}
    />
  );
}

const style = StyleSheet.create({
  text: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderColor: 'lightgrey',
    margin: 5,
    textAlign: 'center',
    color: 'black',
  },
});
