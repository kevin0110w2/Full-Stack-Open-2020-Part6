import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { addNotification } from '../reducers/notificationReducer'

const Anecdote = ({ content, votes, id, voteAnecdote, addNotification }) => {
    const handleClick = () => {
        voteAnecdote(id)
        addNotification((`You've voted '${content}'`), 5)
    }

    return (
        <div>
            <div>
                {content}
            </div>
            <div>
                has {votes}
                <button onClick={handleClick}>vote</button>
            </div>
        </div>
    )
}

const AnecdoteList = (props) => {
    return (
        <div>
            {props.anecdotes.map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    content={anecdote.content}
                    votes={anecdote.votes}
                    id={anecdote.id}
                    voteAnecdote={props.voteAnecdote}
                    addNotification={props.addNotification}
                />
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    if (state.filter === '') {
        return {
            anecdotes: state.anecdotes
        }
    }
    return {
        notes: state.anecdotes.filter(anecdote =>
            anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
        )
    }
}

const mapDispatchToProps = {
    voteAnecdote,
    addNotification,
}

const ConnectedAnecdoteList = connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteList)
export default ConnectedAnecdoteList