const express = require('express')
const router = express.Router()
//uuId on erillinen kirajsto joka otetaan tässä käyttöön. Kirjasto asennettu npm paketti managerilla konsolissa ensin juuri kansioon.
const { v4: uuidv4 } = require('uuid');
//tuotteet taulukko
const products = [
    {   
        "id": uuidv4(),
        "name": "Piisamin_kestävä_laituri",
        "manufacturer": "Tmi_Aake",
        "category": "Laitur",
        "description": "Maailman_kahdeksas_ihme", 
        "price":"open_check"
    },
    {   
        "id":uuidv4(),
        "name": "Sepon",
        "manufacturer": "Suppo_Taalasmaa_Inc.",
        "category": "Pensseli_rasva",
        "description": "Muhkeat_viikset", 
        "price":"50 €"
    },
    ];

//hakee kaikki tuotteet
router.get('/', (req, res) => {
    res.json(products);
});

//hakee tuotteen ID:n mukaan 
router.get('/:productsId', (req, res) => {

    let foundIndex = products.findIndex(p => p.id === req.params.productsId || p.name === req.params.productsId || p.manufacturer === req.params.productsId || p.category === req.params.productsId);
    if(foundIndex === -1) {
        res.sendStatus(404);
        return;
    } else {
        res.json(products[foundIndex]);
    }
})

  

//Poistaa tuotteen ID:n mukaan
router.delete('/:productsId', (req, res) => {
 
   let foudIndex = products.findIndex(p => p.id === req.params.productsId );

   if(foudIndex === -1) {
       res.sendStatus(404);
   }else {
       products.splice(foudIndex, 1);
       res.sendStatus(202);
   }

});

//Lisätään tuote
router.post('/', (req, res)=> {
    //Tämä tulostaa pyynnön konsoliin
    console.log(req.body);
    //tässä listään taulukkoon uusi olio missä on uuden tuotteen kaikki tiedot.
    //nämä tiedot on annettu postmanissa POST käskyllä. 
    //Alla oleva toteus on hiukan jäävä, mutta jaa nyt asiansa. 
    //Oikeastihan koodiin pitäisi lisätä pyyntö joka selvittää, että lisättävät tiedot ovat oikeita. 
    //Nyt sokeasti luotetaan tiedon oikeellisuuteen, mutta sillä ei tässä tilanteessa ole väli koska tehdään itse kaikki lisäykset.
    //Jos sössii jotakin niin voi vain syyttää itseään :D
    products.push({ 
        //uuid luo automaattisesti uuden id numeron kun post kutsu ajetaan.
        id:  uuidv4(),
        name: req.body.products,
        manufacturer: req.body.manufacturer,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price

    });

//Päivitetään yhden tuotteen tietoja joka on haettu ID:n mukaan.
router.put('/:productsId',(req, res) => {
    //Tämä komento hakee products taulukosta oikean tuotteen, kun käyttäjä on syöttänyt tuotteen ID numeron haettavaksi
    //products.find palauttaa koko haettavan elementin kun taas esim products.findIndex palauttaa pelkän indexin.
    //Eli alla oleva haku palauttaa foundProduct muuttujaan koko haetun olion.
    let foundProduct = products.find(p => p.id === req.params.productsId);
    if(foundProduct){
        foundProduct.name = req.body.name;
        foundProduct.manufacturer = req.body.manufacturer;
        foundProduct.category = req.body.category;
        foundProduct.description = req.body.description;
        foundProduct.price = req.body.price;
        res.sendStatus(202);
    }
    else{
        res.sendStatus(404);
    }
})    


    // Tämä on hyväksymis ilmoitus palvelimelta. jos vain tuutataan console.log komento pelkästään palvelin voi jäädä jumiin. 
    res.sendStatus(201);
});


module.exports = router