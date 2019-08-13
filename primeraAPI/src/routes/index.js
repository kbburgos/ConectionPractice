const { Router} = require('express');
const router = Router();

/* GET home page. */
router.get('/test',(req,res)=>{
  const data ={
    "name": "Karla",
    "website": "ESPOL"
  };
  res.json(data);
});

module.exports = router;
