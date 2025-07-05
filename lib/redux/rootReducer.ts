/* Instruments */
import { counterSlice } from './slices'
import { sidebarSlice } from './slices'
import { mobileSlice } from './slices'

export const reducer = {
  counter: counterSlice.reducer,
  sidebar: sidebarSlice.reducer,
  mobile: mobileSlice.reducer,
}
