import React, {useEffect, useState} from 'react';
import {ICatSelection} from '../Modals';

export default function useSelectionHook(navigation: any) {
  const buttons: ICatSelection[] = [
    {
      category: 'Cities',
    },
    {
      category: 'Foods',
    },
    {
      category: 'Animals',
    },
  ];
  const [checked, setChecked] = useState<ICatSelection[]>([]);

  useEffect(() => {
    setChecked(buttons);
  }, []);

  const handleSelected = (e: string) => {
    setChecked(
      checked.map((ele: ICatSelection) => {
        ele.isSelected = false;
        if (e === ele.category) ele.isSelected = true;

        return {
          ...ele,
        };
      }),
    );
  };

  const handleNavigation = () => {
    if (checked.every((ele: ICatSelection) => !!ele.isSelected !== true))
      return;
    navigation.push('Questions', {
      category: checked.find((ele: ICatSelection) => !!ele.isSelected === true)
        ?.category,
    });
  };

  return {
    checked,
    handleSelected,
    handleNavigation,
  };
}
