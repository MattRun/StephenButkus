/* Instruments */
import type { ReduxState } from '@/lib/redux'

export const selectToggleState = (state: ReduxState) => state.sidebar.isToggled;
