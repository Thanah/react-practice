import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index] //as we change the value of the state of index, we can change which person is being shown
  
  const nextPerson = () => {
    setIndex((index)=>{
      let newIndex = index + 1;
      return newIndex % (people.length);
    });
  };
  const prevPerson = () => {
    setIndex((index)=>{
      let newIndex = index - 1;
      if (newIndex < 0) return people.length - 1;
      return newIndex;
    });
  };

  const randomPerson =() => {
    let randomNo = Math.floor(Math.random() * people.length); //math.random generates random value between 0 and 1, multiplied by ppl.length we get value that is random between 0 and ppl.length
    if(randomNo === index) {
      randomNo = index + 1
    }
    if (randomNo > people.length - 1) {
      randomNo = randomNo%2
    }
    setIndex(randomNo)
    console.log(randomNo);
  };
  return <article className='review'>
    <div className="img-container">
      <img src={image} alt={name} className='person-img' />
      <span className='quote-icon'>
        <FaQuoteRight />
      </span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
    <div className="button-container">
      <button className='prev-btn' onClick={prevPerson}>
        <FaChevronLeft />
      </button>
      <button className='next-btn' onClick={nextPerson}>
        <FaChevronRight />
      </button>
      
    </div>
    <button className='random-btn' onClick={randomPerson}>
        Random Review
    </button>
  </article>;
};

export default Review;
