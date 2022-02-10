
import './App.css';
import Title from './componenets/Title';
import Search from './componenets/Search';
import ProductList from './componenets/ProductList';
function App() {

const products = [

  {
      
      
      name: "Kallen kalsarit",
      image: <img src="Kallen kalsongit.jpg"/>,
      price: "5"

  },

  {
      
      name: "Seppo Hovin piano",
      image: <img src="Sepon piano.jpg"/>,
      price: "13000"

  },
  {
      
      name: "Markon assless chapsit",
      image: <img src="Markon chapsit.jpg"/>,
      price: "1500"

  },
  {
      
      name: "Janne Porkan villava shaali",
      image: <img src="Villavashaali.jpg"/>,
      price: "200"
  },
  {
     
      name: "Onnenpyörän Onnenpyörä",
      image: <img src="Onnenpyörä.jpg"/>,
      price: "100"

  },
  {
    
      name: "Jaana Pelkosen ura",
      image: <img src="Rip.jpg"/>,
      price: "2"

  },
  {
    
    name: "Seppo Taalasmaan viikset",
    image: <img src="Sepon viikset.jpg"/>,
    price: "250"

},
{
    
  name: "Ridge Forresterin leuka",
  image: <img src="Ridgen leuka.jpg"/>,
  price: "500"

}



];




  const {search} = window.location;
  const query = new URLSearchParams(search).get('s');
  
  const filterProducts = (products, query) => {
    if (!query) {
      return products;
    }
    return products.filter((product) => {
      const productName = product.name.toLowerCase();
      return productName.includes(query);
    });
  };
  
  
  const filteredProducts = filterProducts(products, query);

    return (
      <div className="App">
        <Title />
        <Search />
        <div className="productContainer">
        {filteredProducts.map(product => (
          <ProductList key={product.key} nimi={product.name} kuva={product.image} hinta={product.price}/>
        ))}
        </div>
        
      </div>
    );
  }
  
  export default App;