import React, { useEffect, useState } from 'react';
import './App.scss';

type Bird = {
  name: string;
  description: string;
  img: string;
  
}

function App() {
  const [birds, setBirds] = useState()
  useEffect(()=>{
    fetch('/birds').then(r=>r.json()).then(data=>{
      console.log(data);
      setBirds(data);
    })
  },[]);
  return (
    <div className="App">
      <header>British Garden Birds</header>

      <main>{birds ? <BirdsList birds={birds} /> : null}</main>

      <footer>&copy; Elmstone Systems Ltd.</footer>
      
    </div>
  );
}

function BirdsList({ birds }: {birds: Bird[]}){

  return <div className='birds'>{
    birds.map(bird => <Bird bird={bird} />)
  }</div>

}

function Bird({ bird }: {bird: Bird}) {
  return <div className='bird'>
    <div className='bird-photo'>
      <img src={`${bird.img}`} />
    </div>
    <div className="bird-text">
      <div className='bird-name'> {bird.name}</div>
      <div className='bird-description'>{bird.description}</div>
    </div>
   
    </div>
}

export default App;
