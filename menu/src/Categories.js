import React from 'react';

const Categories = ({categories, filterItems}) => {

  return (
  <div className='btn-container'> 
    {categories.map((category, index)=>{  //this is how we will create buttons dynamically; can add/remove categories later
      return(
      <button type="button"
      className="filter-btn"
      key={index}
      onClick={()=> filterItems(category)}>
        {category}
      </button>
      );
    })}
    
  </div>
  );
};

export default Categories;
