import React from 'react';
import {useSelectionHook} from '../App/src/CustomHooks';
import {renderHook} from '@testing-library/react-hooks';
import {act} from 'react-test-renderer';
import {ICatSelection} from '../App/src/Modals';

describe('useSelectionHook testing', () => {
  test('should return the selection correctly', () => {
    const {result} = renderHook(() => useSelectionHook(jest.fn()));
    const {handleNavigation, handleSelected} = result.current;
    act(() => handleNavigation());
    act(() => handleSelected('Cities'));
  });

  test('should return the selection correctly', () => {
    const userInputs: ICatSelection[] = [
      {
        category: 'Cities',
        isSelected: true,
      },
    ];
    const mockState = React.useState;
    jest
      .spyOn(React, 'useState')
      .mockImplementationOnce(() => mockState<any>(userInputs));
    const {result} = renderHook(() => useSelectionHook(jest.fn()));
    const {handleNavigation, handleSelected} = result.current;
    act(() => handleNavigation());
    act(() => handleSelected('Cities'));
  });
});
