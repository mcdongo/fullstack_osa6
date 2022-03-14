import { createSlice } from "@reduxjs/toolkit"

const startNotification = ""
const initialState = startNotification

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        newNotification(state, action) {
            return (action.payload)
        }
    }
})

export const { newNotification } = notificationSlice.actions
export default notificationSlice.reducer