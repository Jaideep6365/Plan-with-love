import logo from './logo.svg';
import './App.css';
import data from './data'
import { useState } from 'react';
import Tour from "./Components/Tour";

function App() {
  const [tours,setTour]=useState(data);
  
  function removeTour(id){
    const newTour=tours.filter(tour=> tour.id !==id);
    setTour(newTour);
  }
  if(tours.length===0){
    return(
        <div className="refresh">
            <h2 className='no-tour'>No Tours</h2>
            <button className='refrsh' onClick={()=>setTour(data)}>
                Refresh
            </button>
        </div>
    )
}

  return (
    <div>
      <Tour tour={tours} removeTour={removeTour}></Tour>
    </div>
  );
}

export default App;
