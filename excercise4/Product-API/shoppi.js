//Sovellus käynnistetään kirjoittamalla terminaaliin node shoppi.js 
const express = require('express')
// bodyParser on erllinen kirjasto joka otetaan alla käyttöön.Kirjasto asennettu npm paketti managerilla konsolissa ensin juuri kansioon.
const bodyParser = require('body-parser');
const app = express()
const port = 3000

const products = require('./routes/products');
const users = require('./routes/users');
const invoices = require('./routes/invoices')

//bodyParser aktivoidaan käyttöön alla
app.use(bodyParser.json());


//Tämä tulostuu kun avataan selaimessa Localhost:3000 
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use('/products', products)
app.use('/users', users)
app.use('/invoices', invoices)

//Tämä tulostuu konsoliin kun sovellus lyödään käyntiin
app.listen(port, () => {
  console.log(`Tervetuloa masennus kauppaan`)
});
