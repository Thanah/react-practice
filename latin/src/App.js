import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count); //store string input as int bc the input will be read at string
    if(count <= 0){
      amount = 1;
    }
    if(count > 8){
      amount = 8;
    }
    setText(data.slice(0,amount)) //selects new items from array
  }  
  return (
  <section className='section-center'>
    <h3>tired of boring lorem ipsum?</h3>
    <form className="lorem-form" onSubmit={handleSubmit}>
      <label htmlFor="amount">
        paragraphs:
      </label>
      <input type="number" name='amount' id='amount' value={count}
      onChange={(e)=>setCount(e.target.value)} /> {/*regular input html; value is the text, onChange lets it know what to do when value changes*/}
      <button type='submit' className='btn'>generate</button>
    </form>{/*form*/}
    <article className='lotem-text'>
      {text.map((item,index)=>{
        return <p key={index}>{item}</p>
      })}
    </article>
  </section>
    )
}

export default App;
