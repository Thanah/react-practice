import React, { useEffect } from 'react'

const Alert = ({type, msg, resetAlert}) => {
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      resetAlert()
    }, 3000)
    return () => clearTimeout(timeout)
  }, [])
  return <p className={`alert alert-${type}`}>{msg}</p> //default alert, else alert-success/danger
}

export default Alert
