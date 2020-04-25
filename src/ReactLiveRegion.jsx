import React, { useState, useEffect } from 'react'
import './liveregion.css'

const useLiveText = (text, timeout) => {
  const [ariaLiveText, setAriaLiveText] = useState('')
  const updateText = () => setAriaLiveText(text)
  const updateTextAsync = () => setTimeout(updateText, timeout)

  useEffect(() => {
    const timer = updateTextAsync()

    return () => {
      clearTimeout(timer)
    }
  }, [text])
  return { ariaLiveText, updateTextAsync }
}

const ReactLiveRegion = ({ text, timeout=100, setting='polite', atomic="false" }) => {
  const updateText = useLiveText(text, timeout)
  return (
    <span 
      className='live-region-hidden-elm' 
      aria-atomic={atomic} 
      aria-live={setting} 
      data-testid="live-region">
      {updateText.ariaLiveText}
    </span>
  )
}

export default ReactLiveRegion