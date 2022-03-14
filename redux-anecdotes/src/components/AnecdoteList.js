import { useSelector, useDispatch } from "react-redux";
import { castVote } from "../reducers/anecdoteReducer";
import { newNotification, newVoteNotification } from "../reducers/NotificationReducer";

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)
    const anecdotesToShow = anecdotes

    if (filter.filter !== '') {
        const anecdotesToShow = anecdotes.filter(anecdote => anecdote.content.includes(filter))}
    const dispatch = useDispatch()

    const vote = (id, content) => {
        dispatch(castVote(id))
        console.log(content)
        dispatch(newVoteNotification(content))
    }

    return (
        <div>
            {anecdotesToShow.map(anecdote => 
            <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
                </div>
        </div>
            )}
        </div>
    )

}

export default AnecdoteList