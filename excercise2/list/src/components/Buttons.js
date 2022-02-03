
import React from 'react';

export default function Buttons(props) {
   
  return <div>
    <button onClick={ () => props.Kossu(1)}>Add Karhu</button>
    <button onClick={ () => props.Kossu(2)}>Add Koskenkorva</button>
    <button onClick={ () => props.Kossu(3)}>Add Piri</button>
    <button onClick={ () => props.Kossu(4)}>Add Heroiini</button>

  </div>;
}
