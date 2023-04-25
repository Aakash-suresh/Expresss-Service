const express = require('express')
const router = express.Router();

router.get('/',(request,response)=>{
    response.send("This is Login Page...")
})

router.get('/:id/:name',(request,response)=>{
    response.send("Passed Value is "+request.params.id+" name is "+request.params.name)
})

module.exports=router