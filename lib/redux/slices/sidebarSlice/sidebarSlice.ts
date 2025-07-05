/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: SidebarSliceState = {
  isToggled: false,
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggle: (state) => {
      state.isToggled = !state.isToggled;
    },
    close: (state) => {
      state.isToggled = false;
    },
  },
})

/* Types */
export interface SidebarSliceState {
  isToggled: boolean;
}

