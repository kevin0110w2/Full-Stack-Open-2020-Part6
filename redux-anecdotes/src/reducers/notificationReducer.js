let timeoutID;

export const addNotification = (notification, timeout) => {
    return async dispatch => {
        dispatch({
            type: 'ADD_NOTIFICATION',
            notification
        })
        clearTimeout(timeoutID)
        timeoutID = setTimeout(() => {
            dispatch(removeNotification())
        }, (timeout * 1000))
    }
}

export const removeNotification = () => {
    return {
        type: 'REMOVE_NOTIFICATION',
        notification: '',
    }
}

const reducer = (state = '', action) => {
    switch (action.type) {
        case 'ADD_NOTIFICATION':
            return action.notification
        case 'REMOVE_NOTIFICATION':
            return action.notification
        default:
            return state;
    }
}

export default reducer