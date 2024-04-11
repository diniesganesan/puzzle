export interface IStacks {
  name: string;
  component: any;
}

export interface IGameProps {
  totalScore: number;
}

export interface ICatSelection {
  category: string;
  isSelected?: boolean;
}

export interface IQnAProps {
  question: string;
  answer: string;
  jumbled: string;
  level: number;
  points: number;
}

export interface ICategoryProps {
  CITIES: IQnAProps[];
  FOODS: IQnAProps[];
  ANIMALS: IQnAProps[];
}
export const CATEGORIES: ICategoryProps = {
  CITIES: [
    {
      question: 'Capital of Thailand',
      answer: 'BANGKOK',
      jumbled: 'OBGNAKK',
      level: 1,
      points: 10,
    },
    {
      question: 'Capital of Singapore',
      answer: 'SINGAPORE',
      jumbled: 'OEIANGSPR',
      level: 2,
      points: 15,
    },
    {
      question: 'Capital of Malaysia',
      answer: 'KUALALUMPUR',
      jumbled: 'AAURMPUKLLU',
      level: 3,
      points: 20,
    },
  ],
  FOODS: [
    {
      question: 'A cereal grain',
      answer: 'RICE',
      jumbled: 'RCIE',
      level: 1,
      points: 10,
    },
    {
      question: 'A root vegetable, orange in color',
      answer: 'CARROT',
      jumbled: 'TROACR',
      level: 2,
      points: 15,
    },
    {
      question: 'Succulent fruit of dazzling red color',
      answer: 'STRAWBERRY',
      jumbled: 'TARYREBWSR',
      level: 3,
      points: 20,
    },
  ],
  ANIMALS: [
    {
      question: 'Domestic species of small carnivorous mammal',
      answer: 'CAT',
      jumbled: 'TAC',
      level: 1,
      points: 10,
    },
    {
      question: 'Also known as simians',
      answer: 'MONKEY',
      jumbled: 'MYOEKN',
      level: 2,
      points: 15,
    },
    {
      question: 'Largest existing land animal',
      answer: 'ELEPHANT',
      jumbled: 'TPNLEHEA',
      level: 3,
      points: 20,
    },
  ],
};
