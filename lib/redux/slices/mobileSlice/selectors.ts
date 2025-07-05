/* Instruments */
import type { ReduxState } from '@/lib/redux'

export const selectMobileState = (state: ReduxState) => state?.mobile?.isMobile;
