const express = require('express')
const router = express.Router();

router.get('/',(request,response)=>{
    response.send("This is About Us Page...")
})

module.exports=router