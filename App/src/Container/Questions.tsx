import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Boxes, CustomButton, InputBoxes, Layout, Score} from '../Component';
import {useGenerateQuestHook, useProcessHook} from '../CustomHooks';
import {IQnAProps} from '../Modals';

interface IQuestionsProps {
  navigation: any;
  route: any;
}
export default function Questions({navigation, route}: IQuestionsProps) {
  const {_QnA} = useGenerateQuestHook(route.params.category);

  const {
    QnA,
    questNo,
    value,
    buttonName,
    showReward,
    score,
    onHandleQuest,
    onHandleUserInputs,
  } = useProcessHook(navigation, _QnA);

  return (
    <Layout>
      <View style={style.container}>
        {showReward && (
          <Score
            questionNumber={questNo}
            score={score}
            totalQuestions={QnA.length}
          />
        )}
        {!showReward &&
          QnA.map(
            (ele: IQnAProps, ix: number) =>
              questNo === ix + 1 && (
                <View key={ix}>
                  <Text style={style.text}>{`${ix + 1} / ${QnA.length}`}</Text>
                  <View style={style.answerContainer}>
                    {ele.jumbled.split('').map((_l: string, i: number) => (
                      <InputBoxes
                        key={i}
                        position={i}
                        userInputs={value}
                        value={value[i]?.toUpperCase()}
                        onHandleText={onHandleUserInputs}
                      />
                    ))}
                  </View>
                  <Text style={style.text}>{ele.question}</Text>
                  <View style={style.jumbledContainer}>
                    {ele.jumbled.split('').map((l: string, i: number) => (
                      <Boxes key={i} letter={l} />
                    ))}
                  </View>
                </View>
              ),
          )}
      </View>
      <View style={style.pushBottom}></View>
      <CustomButton
        name={buttonName}
        bgColor="lightgrey"
        onPress={onHandleQuest}
      />
    </Layout>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 50,
  },
  pushBottom: {
    flex: 1,
  },
  answerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  jumbledContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  text: {textAlign: 'center', color: 'black'},
});
