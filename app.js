import express from 'express'
import v1Router from './routes/v1.route.js';
import Joi from 'joi';

const app = express()

//middleware
app.use(express.json())



app.use('/v1',v1Router)



export default app;


// const schema= Joi.object({
//     name:Joi.string().required(),
//     age:Joi.number()
// })

// const{value,error}=schema.validate({test:"123"},{
//     abortEarly:false
// })
// console.log(error.details.map((detail)=>detail.message)
// )

