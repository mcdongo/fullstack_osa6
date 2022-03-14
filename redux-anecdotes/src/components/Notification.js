import { useSelector } from "react-redux"

const Notification = () => {
  const notification = useSelector(state => state.notification)
  console.log(notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  
  if (notification.message !== '' && notification.timeleft > 0) {
    return (
      <div style={style}>
        You voted '{notification.message}'
      </div>
    )
  }
  return (
    <div></div>
  )
}

export default Notification