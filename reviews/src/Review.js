import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(4);
  const {name, job, image, text} = people[index] //as we change the value of the state of index, we can change which person is being shown
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
      <button className='prev-btn'>
        <FaChevronLeft />
      </button>
      <button className='next-btn'>
        <FaChevronRight />
      </button>
      
    </div>
    <button className='random-btn'>
        Random Review
    </button>
  </article>;
};

export default Review;
