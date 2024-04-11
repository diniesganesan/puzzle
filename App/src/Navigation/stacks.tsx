import React from 'react';
import {Questions, Home} from '../Container';
import {IStacks} from '../Modals';

export const STACKS: IStacks[] = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Questions',
    component: Questions,
  },
];
