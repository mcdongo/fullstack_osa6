import { useDispatch } from "react-redux"
import { newAnecdote } from "../reducers/anecdoteReducer"
import { newNotification } from "../reducers/NotificationReducer"
import AnecdoteService from "../services/AnecdoteService"

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    
    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.content.value
        dispatch(newAnecdote(content))
        dispatch(newNotification(content))
        event.target.content.value = ''
      }
    return(
        <div>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
            <div><input name="content"/></div>
            <button type="submit">create</button>
        </form>
        </div>
    )
}

export default AnecdoteForm