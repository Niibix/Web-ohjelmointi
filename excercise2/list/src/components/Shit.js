import React from 'react';

export default function Shit(props) {
  return <div className="listaSisalto" >
          <ul className="lista">
            {props.Shit.map((item,index )=> {
              return <li className="sisal" key={index}>{item.qty} {item.name}</li>
            }
            )}

          </ul>

  
  </div>

  
  ;
}
