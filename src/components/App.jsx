import React from 'react';
import Card from "./Card";
import card from "./card";
import Header from './Header';
import Navbar from './Navbar';


function create_card(person){
  return (
    <Card
    key={person.id}
    name={person.name}
    time={person.time} />
  );
}




const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <ul className="cards">
      {card.map(create_card)}
      </ul>
    </div>
  )
}

export default App
