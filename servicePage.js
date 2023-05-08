const express = require('express')
const router = express.Router();

router.get('/',(request,response)=>{
    response.send("This is Service Page...")
})

router.get('/:id',(request,response) =>{
    // response.write(`id is ${request.params.id}\n`)
    response.write(`S.No : ${request.user.S_NO}\n`)
    response.write(`Service : ${request.user.Service}\n`)
    response.end(`Description : ${request.user.Service}`)
})

router.param('id', (request,response, next, id) =>{
     request.user = listOfService[id ]
     next()
})

const listOfService = [
    { S_NO: 1, Service: "Web Development", description: "Build high-quality web applications using modern technologies" },
    { S_NO: 2, Service: "Mobile App Development", description: "Develop mobile applications for iOS and Android platforms" },
    { S_NO: 3, Service: "Backend Development", description: "Design and implement scalable and secure backend systems" },
    { S_NO: 4, Service: "Frontend Development", description: "Create dynamic and responsive user interfaces using popular frameworks" },
    { S_NO: 5, Service: "Data Engineering", description: "Extract, transform, and load large datasets to support business operations" },
    { S_NO: 6, Service: "AI Development", description: "Build intelligent systems using machine learning and other AI techniques" },
    { S_NO: 7, Service: "Research and Development", description: "Explore emerging technologies and innovate new solutions" },
    { S_NO: 8, Service: "Cloud Architecture", description: "Design and deploy scalable and reliable cloud infrastructure" }
];

router.route('/:id')
    .get((request,response)=>{  
        // const serviceId = Number(request.params.id)
        // const getService = listOfService.find((service)=>service.S_NO === serviceId)
        if(!getService)
        {
            response.status(404).send("Service not Found...")
        }
        else
        {
            request.user = getService
            response.send(`id is ${request.params.id}\nS.NO : ${request.user.S_NO}\nService : ${request.user.Service}\nDescription : ${request.user.description}`)
        }
    })
    .put((request,response) =>{
      response.send(`id is ${request.params.id}`)
    })
    .delete((request,response)=>{
        response.send(`Delete method on user page with id ${request.params.id}`)
    })

module.exports=router
