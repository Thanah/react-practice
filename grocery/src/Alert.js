import React, { useEffect } from 'react'

const Alert = ({type, msg, resetAlert, list}) => {
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      resetAlert()
    }, 3000)
    return () => clearTimeout(timeout)
  }, [list])
  return <p className={`alert alert-${type}`}>{msg}</p> //default alert, else alert-success/danger
}

export default Alert
