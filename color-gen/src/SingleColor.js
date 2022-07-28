import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hexColor}) => {
  const [alert, setAlert] = useState(false)
  const bg = rgb.join(',') //bg background color will join value from rgb separated by comma ,
  const hex = rgbToHex(...rgb)

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setAlert(false) //resets alert to false to clear alert
    }, 1000)  //after 1 second
    return ()=> clearTimeout(timeout) //clear timeout
  }, [alert]) //runs whenever alert changes

  return <article className={`color ${index > 10 && 'color-light'}`} style={{
    backgroundColor : `rgb(${bg})`}}
    onClick={() => {
      setAlert(true);
      navigator.clipboard.writeText(hex);
    }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
}

export default SingleColor
