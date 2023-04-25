const express = require('express')
const router = express.Router();

const listOfService = [
    { id: 1, Service: "Web Development", description: "Build high-quality web applications using modern technologies" },
    { id: 2, Service: "Mobile App Development", description: "Develop mobile applications for iOS and Android platforms" },
    { id: 3, Service: "Backend Development", description: "Design and implement scalable and secure backend systems" },
    { id: 4, Service: "Frontend Development", description: "Create dynamic and responsive user interfaces using popular frameworks" },
    { id: 5, Service: "Data Engineering", description: "Extract, transform, and load large datasets to support business operations" },
    { id: 6, Service: "AI Development", description: "Build intelligent systems using machine learning and other AI techniques" },
    { id: 7, Service: "Research and Development", description: "Explore emerging technologies and innovate new solutions" },
    { id: 8, Service: "Cloud Architecture", description: "Design and deploy scalable and reliable cloud infrastructure" }
  ];

router.get('/',(request,response)=>{
    response.send("This is Service Page...")
})

// router.get('/:id',(request,response)=>{
//     if(request.params.id==1)
//     {
//         response.send("The Service Number is "+request.params.id+"And the service is Web development")
//     }
//     else if(request.params.id==2)
//     {
//         response.send("The Service Number is "+request.params.id+"And the service is MobileApp Development")
//     }
//     else if(request.params.id==3)
//     {
//         response.send("The Service Number is "+request.params.id+"And the service is Backend Development")
//     }
//     else if(request.params.id==4)
//     {
//         response.send("The Service Number is "+request.params.id+"And the service is Frontend Development")
//     }
//     else if(request.params.id==5)
//     {
//         response.send("The Service Number is "+request.params.id+"And the service is Data Engineer")
//     }
//     else if(request.params.id==6)
//     {
//         response.send("The Service Number is "+request.params.id+"And the service is AI Development")
//     }
//     else if(request.params.id==7)
//     {
//         response.send("The Service Number is "+request.params.id+"And the service is Research And Development")
//     }
//     else if(request.params.id==8)
//     {
//         response.send("The Service Number is "+request.params.id+"And the service is Cloud Architect")
//     }
//     else
//     {
//         response.send("Service not Found...")
//     }  
// })

router.get('/:id',(request,response)=>{
    const serviceId = Number(request.params.id)
    const getService = listOfService.find((service)=>service.id=== serviceId)
    if(!getService)
    {
        response.status(500).send("Expected Service Not Found...")
        console.log(request.params.id)
    }
    else
    {
        response.json(getService)
    }
})

module.exports=router 