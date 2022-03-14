import { configureStore } from "@reduxjs/toolkit"
import reducer from "./anecdoteReducer"

const store = configureStore({
    reducer: {
        anecdotes: reducer
    }
})

export default store