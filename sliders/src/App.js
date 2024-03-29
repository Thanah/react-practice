import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  
  useEffect(() => { //handles first and last case
    const lastIndex = people.length - 1;
    if(index < 0){
      setIndex(lastIndex);
    }
    if(index > lastIndex){
      setIndex(0);
    }
  }, [index, people]); //invoked when index/people change

  useEffect( () =>{ //handles auto slide
    let slider = setInterval(()=>{  
      setIndex(index + 1)
    }, 3000); //3 second interval
    return () => clearInterval(slider); //clean up function
  }, [index]); //invoked whenever the index changes
  return <section className="section">
    <div className="title">
      <h2>
        <span>/</span>reviews
      </h2>
    </div>
    <div className="section-center">
      {people.map((person, personIndex)=>{
          const {id, image, name, title, quote} = person; //deconstruct data
          //TODO more classes
          let position = 'nextSlide';
          if (personIndex === index){ //if the person is the current index, it becomes active
            position = 'activeSlide';
          }
          if(personIndex === index - 1 || (index === 0 && personIndex === person.length - 1)){  //for the prev person OR the last person if curr is first person
            position = 'lastSlide'
          }
          return (<article className={position} key = {id}>  
            <img src={image} alt={title} className="person-img"/>
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className='icon' />
          </article>);
        })}
        <button className="prev" onClick={()=> setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={()=> setIndex(index + 1)}>
          <FiChevronRight />
        </button>
    </div>
  </section>
}

export default App;
