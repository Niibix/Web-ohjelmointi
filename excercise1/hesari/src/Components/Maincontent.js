import React from 'react';

export default function Maincontent(props) {
  return <div className="maincontent">
        
        
        <div className="mainPage">
          <div className="mainHeadline">Morso on palannut!
          
          <div className="morso">
            <img className="morsoKuva" src="https://hs.mediadelivery.fi/img/468/dfd36d621f214fd4afaf03f28f606f7f.jpg"
            height="600" width="1500">
            </img>
            </div>

            </div>

            <div className="sideBar">
              <div className="Vittu">
                <div className="Luetuin"><h1>Luetuimmat</h1></div>
              
             {
                props.sideNews.map((item) =>{
                  return <div className='numero' key={item}> {item.nmb}
                  <div className="uutinen" key={item}> {item.news}</div> 
                 </div>
                  
                  
                })}

             

            </div>
        </div>
        </div>
        </div>;}
