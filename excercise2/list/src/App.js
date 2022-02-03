import Pohjanpaska from './components/Pohjanpaska';
import Shit from './components/Shit';
import Buttons from './components/Buttons';
import './App.css';
import { useState, useEffect } from 'react';





function App() {

/*
  const[randomNumber, setRandomNumber] = useState(0);
  */

  const [benneItems ,setBenneItems] = useState([
    { 
      id:1,
      qty: 0,
      name: "Karhu"
    },
    { 
      id:2,
      qty: 0,
      name: "Koskenkorva"
    },
    { 
      id:3,
      qty: 0,
      name: "Piri"
    },
    { 
      id:4,
      qty: 0,
      name: "Heroiini"
    }
  ]);

const onKarhuAddition = (idCheck) =>{
var randomNumber = Math.floor(Math.random() *10) +1;



let newbenneItems = [...benneItems];

let itemClickedIdex = newbenneItems.findIndex(i => idCheck === i.id);

if(itemClickedIdex != -1) {

  let newElement = {...newbenneItems[itemClickedIdex]}
  newElement.qty = newElement.qty + randomNumber;
  newbenneItems[itemClickedIdex] = newElement;

  setBenneItems(newbenneItems);
}

}



  return (
    <div className="App">


     
    <Pohjanpaska />


    <Shit Shit={benneItems} />
    <Buttons Kossu= { onKarhuAddition } />

    </div>
  );
}

export default App;
