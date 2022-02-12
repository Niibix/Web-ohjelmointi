var express = require('express')
var router = express.Router()
//uuId on erillinen kirajsto joka otetaan tässä käyttöön. Kirjasto asennettu npm paketti managerilla konsolissa ensin juuri kansioon.
const { v4: uuidv4 } = require('uuid');

//käyttäjät taulukko
const users = [
    { 
        "id": uuidv4(),
        "name": "Jorma Mela", 
        "address":"Melakatu 69"
    }
];

//hakee kaikki käyttäjät
router.get('/', (req, res) => {
    res.json(users);
});

//Lisätään käyttäjät 

router.post('/', (req, res)=>{
 console.log(req.body);

 users.push({ 
     id: uuidv4(), 
     name: req.body.name,
     address: req.body.address
 })
});



module.exports = router