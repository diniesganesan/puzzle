import React from 'react';

export default function useInputBoxesHook(
  userInputs: string[],
  position: number,
  onHandleText: (e: string[]) => void,
) {
  const handleOnChangeText = (e: string) => {
    userInputs[position] = e;
    onHandleText(userInputs);
  };

  return {
    handleOnChangeText,
  };
}
