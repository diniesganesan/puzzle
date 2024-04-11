import React, {useState} from 'react';
import {IQnAProps} from '../Modals';
import {calculateScore} from '../Slices/commonSlice';
import {RootState, useAppDispatch, useAppSelector} from '../Store';

export default function useProcessHook(navigation: any, QnA: IQnAProps[]) {
  const [questNo, setQuestNo] = useState(1);
  const [value, setValue] = useState<string[]>([]);
  const [buttonName, setButtonName] = useState<string>('SKIP');
  const [showReward, setShowReward] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const score = useAppSelector((state: RootState) => state.common.totalScore);

  const onHandleUserInputs = (e: string[]) => {
    let store = e;
    for (let c = 0; c < store.length; c++) {
      if (!store[c]) {
        store[c] = '';
      }
    }
    setButtonName(store.every((el: string) => el === '') ? 'SKIP' : 'NEXT');
    setValue(store.every((el: string) => el === '') ? [] : [...store]);
  };

  const onHandleQuest = () => {
    if (buttonName === 'SKIP') {
      questNo < QnA.length && setQuestNo(prev => prev + 1);
      if (questNo === QnA.length) {
        navigation.popToTop('Home');
        return;
      }
    }

    if (
      value.join('').toUpperCase() === QnA[questNo - 1].answer.toUpperCase() &&
      !showReward
    ) {
      setShowReward(true);
      dispatch(calculateScore(QnA[questNo - 1].points));
    }
    if (showReward) {
      questNo < QnA.length && setQuestNo(prev => prev + 1);
      if (questNo === QnA.length) {
        navigation.popToTop('Home');
        return;
      }
      setShowReward(false);
      setValue([]);
      setButtonName('SKIP');
    }
  };

  return {
    QnA,
    questNo,
    value,
    buttonName,
    showReward,
    score,
    onHandleQuest,
    onHandleUserInputs,
  };
}
