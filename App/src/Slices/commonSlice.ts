import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IGameProps} from '../Modals';

const initialState: IGameProps = {
  totalScore: 0,
};
export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    calculateScore: (state, action: PayloadAction<number>) => {
      state.totalScore += action.payload;
    },
  },
});

export const {calculateScore} = commonSlice.actions;
export default commonSlice.reducer;
