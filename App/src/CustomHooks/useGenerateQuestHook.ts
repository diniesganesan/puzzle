import React from 'react';
import {CATEGORIES, ICategoryProps} from '../Modals';

export default function useGenerateQuestHook(category: string) {
  return {
    _QnA: CATEGORIES[category.toUpperCase() as keyof ICategoryProps],
  };
}
