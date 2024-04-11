import React from 'react';
import {useProcessHook} from '../App/src/CustomHooks';
import {renderHook} from '@testing-library/react-hooks';
import {act} from 'react-test-renderer';
import {IQnAProps} from '../App/src/Modals';
import * as redux from 'react-redux';

const mockDispatch = jest.fn();
const mockSelector = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
  useSelector: () => mockSelector,
}));

describe('useProcessHook testing', () => {
  test('should return cities QnA', () => {
    jest.spyOn(redux, 'useSelector').mockReturnValueOnce({
      value: {
        common: {
          totalScore: 0,
        },
      },
    });
    const userInputs: IQnAProps[] = [
      {
        answer: 'AnsA',
        jumbled: 'AnsA',
        level: 1,
        points: 10,
        question: 'Question 1',
      },
    ];
    const {result} = renderHook(() =>
      useProcessHook(
        {
          popToTop: jest.fn(),
        },
        userInputs,
      ),
    );
    const {onHandleQuest, onHandleUserInputs} = result.current;
    act(() => onHandleQuest());
    act(() => onHandleUserInputs(['A', 'N', 'S', 'A']));
  });
});
