import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setjobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => { //fetch data from api using async await
    const response  = await fetch(url);
    const newJobs = await response.json();
    setjobs(newJobs);
    setLoading(false);
  }
  useEffect(()=> {  //load in api data in loadtime
    fetchJobs();
  },[]);
  if(loading){  //loading page while async fetches data
    return <section className='section loading'>
      <h1>loading...</h1>
    </section>
  }
  const {company, dates, duties, title} = jobs[value]; //we look for it at this point after loading now that we have access to that data
  return(
  <main>
    <section className='section'>
      <div className="title">
        <h1>experience</h1>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {
            jobs.map((item,index)=>{
              return <button key={item.id} onClick={()=>
                setValue(index)}// ' and " are used for strings, ` is used for interpolation ie value instead of literal
                className={`job-btn ${index === value && 'active-btn'}`} //if index matches current value, then also style as active btn 
                >
                  {item.company}
                  </button>
            })
          }
        </div>
        {/*job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty,index)=>{
            return <div key={index} className='job-desc'>
              <FaAngleDoubleRight className='job-icon'/>
              <p>{duty}</p>
            </div>
          })}
        </article>
      </div>

    </section>
  </main>
  );
}

export default App
