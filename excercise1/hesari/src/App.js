
import './App.css';
import Maincontent from './Components/Maincontent';
import Header from './Components/Header';
import Adbanner from './Components/Adbanner';
function App() {

  const numb = [
    1,
    2,
    3,
    4
  ]

 const poop = [
   'Perse-Kimmon vakosamettihousut ratkesivat viimeinkin',
   'Näin maksat opintolainasi pois pikavipeillä helposti',
   'Anxiety Island Suomi päättyy vain yhden kauden jälkeen',
   'Nyt puhuvat Aake Kallialan laiturin syöneet Piisamit'
 ] 

  return (
    <div className="App">
      <Header />
      <Adbanner />
     <Maincontent sideNumbs={numb}  shit={poop} />
     
    </div>
  );
}

export default App;
