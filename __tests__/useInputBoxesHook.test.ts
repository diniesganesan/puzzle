import React from 'react';
import {useInputBoxesHook} from '../App/src/CustomHooks';
import {renderHook} from '@testing-library/react-hooks';
import {act} from 'react-test-renderer';

describe('useInputBoxesHook testing', () => {
  test('should return cities QnA', () => {
    const userInputs: string[] = [];
    const {result} = renderHook(() =>
      useInputBoxesHook(userInputs, 1, jest.fn()),
    );
    const {handleOnChangeText} = result.current;
    act(() => handleOnChangeText('Test'));
  });
});
