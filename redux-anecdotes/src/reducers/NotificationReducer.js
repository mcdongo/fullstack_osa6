import { createSlice } from "@reduxjs/toolkit"

const startNotification = {message: '', timeleft: 0}
const initialState = startNotification

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    timeleft: 0,
    reducers: {
        newNotification(state, action) {
            state.message = action.payload
            state.timeleft = 5
        },
    }
})

export const { newNotification } = notificationSlice.actions
export default notificationSlice.reducer