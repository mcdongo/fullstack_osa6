import { createSlice } from "@reduxjs/toolkit"
import AnecdoteService from "../services/AnecdoteService"

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    castVote(state, action) {
      const anecdoteToChange = state.find(n => n.id === action.payload)
      const changedAnecdote = {...anecdoteToChange, votes: anecdoteToChange.votes + 1}
      return state.map(anecdote =>
        anecdote.id !== changedAnecdote.id ? anecdote : changedAnecdote
      ).sort((a,b) => {return b.votes-a.votes})
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})


export const { castVote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializedAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await AnecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const newAnecdote = content => {
  return async dispatch => {
    const newDote = await AnecdoteService.createNew(content)
    dispatch(appendAnecdote(newDote))
  }
}

export const voteUp = id => {
  return async dispatch => {
    const updatedAnecdote = await AnecdoteService.voteUp(id)
    console.log(updatedAnecdote)
    dispatch(initializedAnecdotes())
    ///dispatch(castVote(updatedAnecdote))
  }
}
export default anecdoteSlice.reducer