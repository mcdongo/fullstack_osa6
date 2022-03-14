import { configureStore } from "@reduxjs/toolkit"
import reducer from "./anecdoteReducer"
import notificationReducer from "./NotificationReducer"
import FilterReducer from "./FilterReducer"

const store = configureStore({
    reducer: {
        anecdotes: reducer,
        notification: notificationReducer,
        filter: FilterReducer
    }
})

export default store