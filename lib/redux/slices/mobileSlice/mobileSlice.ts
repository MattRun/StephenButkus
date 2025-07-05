/* Core */
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: MobileSliceState = {
  isMobile: false,
}

export const mobileSlice = createSlice({
  name: 'mobile',
  initialState,
  reducers: {
    isMobileOn: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload;
    },
  },
})

/* Types */
export interface MobileSliceState {
  isMobile: boolean;
}

