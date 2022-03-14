import { configureStore } from "@reduxjs/toolkit"
import reducer, { setAnecdotes } from "./anecdoteReducer"
import notificationReducer from "./NotificationReducer"
import FilterReducer from "./FilterReducer"
import AnecdoteService from "../services/AnecdoteService"

const store = configureStore({
    reducer: {
        anecdotes: reducer,
        notification: notificationReducer,
        filter: FilterReducer
    }
})

AnecdoteService.getAll().then(anecdotes => {
    store.dispatch(setAnecdotes(anecdotes))
})

export default store