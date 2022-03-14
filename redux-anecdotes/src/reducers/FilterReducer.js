import { createSlice } from "@reduxjs/toolkit"

const start = {filter: ''}
const initialState = start

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeFilter(state, action) {
            state.filter = action.payload
            console.log(state.filter)
        }
    }
})

export const { changeFilter } = filterSlice.actions
export default filterSlice.reducer