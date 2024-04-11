import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface IScoreProps {
  questionNumber: number;
  totalQuestions: number;
  score: number;
}
export default function Score({
  questionNumber,
  score,
  totalQuestions,
}: IScoreProps) {
  return (
    <View>
      <Text
        style={
          style.numOfQuest
        }>{`${questionNumber} / ${totalQuestions}`}</Text>
      <Text style={style.message}>Correct! Congratulations</Text>
      <Text style={style.message}>{`You earn ${score} points`}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  numOfQuest: {
    textAlign: 'center',
    color: 'black',
  },
  message: {
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
    paddingTop: 30,
  },
});
