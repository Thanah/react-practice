import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// sample API provided by community creator
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }
  const fetchTours = async() => {
    setLoading(true);
    try {
      const res = await fetch(url);{/*call fetch on url var */}
      const tours = await res.json(); {/*parse data from json*/}
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    console.log(tours);
  }
  useEffect(()=>{
    fetchTours();
  }, []); {/*empty array as useEffect parameter makes the hook only run during load time unless dependency changes */}
  if(loading){
    return(
      <main>
        <Loading />   {/*render loading component if loading is true*/}
      </main>
    );
  }
  if(tours.length === 0) {
    return <main>
      <div className="title">
        <h2>no tours left</h2>
        <button className='btn' onClick={fetchTours}>refresh page</button>
      </div>
    </main>
  }
  return (
  <main>
    <Tours tours={tours} removeTour={removeTour}/> {/*Load tours component when not loading*/}
  </main>
  );
}

export default App
