import { useState } from 'react'

const Toast = () => {
  const [message, setMessage] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  const showToast = (newMessage) => {
    setMessage(newMessage)
    setIsVisible(true)

    setTimeout(() => {
      setIsVisible(false)
    }, 3000)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div style={{ background: '#333', color: '#fff', padding: '1rem' }}>
      {message}
    </div>
  )
}

const ParentComponent = () => {
  const triggerToast = () => {
    Toast.showToast('Hello from the parent component!')
  }

  return (
    <div>
      <button onClick={triggerToast}>Show Toast </button>
      <Toast />
    </div>
  )
}

export default ParentComponent
