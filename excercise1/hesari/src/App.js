
import './App.css';
import Maincontent from './Components/Maincontent';
import Header from './Components/Header';
import Adbanner from './Components/Adbanner';
function App() {


 const poop = [
  {nmb:1,
  news: 'Perse-Kimmon vakosamettihousut ratkesivat viimeinkin'},
  {nmb:2,
  news:'Näin maksat opintolainasi pois pikavipeillä helposti'},
  {nmb:3,
  news:'Anxiety Island Suomi päättyy vain yhden kauden jälkeen'},
  {nmb:4,
   news:'Nyt puhuvat Aake Kallialan laiturin syöneet Piisamit'}
 ] 



  return (
    <div className="App">
      <Header />
      <Adbanner />
     <Maincontent sideNews={poop}  />
     
    </div>
  );
}

export default App;
