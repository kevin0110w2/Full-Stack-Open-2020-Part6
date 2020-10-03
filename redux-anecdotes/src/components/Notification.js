import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  const hiddenStyle = {
    padding: 10,
    borderWidth: 1
  }

  return (!notification || notification === '')
    ?
    <div style={hiddenStyle}>
      {notification}
    </div>
    :
    <div style={style}>
      {notification}
    </div>
}

export default Notification