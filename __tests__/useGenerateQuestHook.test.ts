import React from 'react';
import {useGenerateQuestHook} from '../App/src/CustomHooks';
import {renderHook} from '@testing-library/react-hooks';

describe('useGenerateQuestHook testing', () => {
  test('should return cities QnA', () => {
    const {result} = renderHook(() => useGenerateQuestHook('cities'));
    const {_QnA} = result.current;
    expect(_QnA).toBeDefined();
  });
  test('should return foods QnA', () => {
    const {result} = renderHook(() => useGenerateQuestHook('foods'));
    const {_QnA} = result.current;
    expect(_QnA).toBeDefined();
  });
  test('should return animals QnA', () => {
    const {result} = renderHook(() => useGenerateQuestHook('animals'));
    const {_QnA} = result.current;
    expect(_QnA).toBeDefined();
  });
});
