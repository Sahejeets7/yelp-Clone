require('dotenv').config();
const express = require('express');
const morgan = require('morgan')
const db = require('./db')

const app = express();

// Middleware
// app.use((req,res,next) => {
//     next();
// })

app.use(express.json());
// app.use(morgan('tiny'));

//Get all restaurants
app.get('/api/v1/restaurants', async (req,res) => {

    const results = await db.query("Select * from restaurants")
    console.log(results);
    res.status(200).json({
        status: 'success',
    })
})

// get a restaurant
app.get('api/v1/restaurants/:id',(req,res) => {
    console.log(req.params);
})

// Create a restaurant
app.post('api/v1/restaurants',(req,res)=>{
    console.log(req.body);
})

//Update a restaurant
app.put('api/v1/restaurants/:id',(req,res) => {
    console.log(req.params.id, req.body);
})

// Delete a restaurant
app.delete('api/v1/restaurants/:id',(req,res) => {
    res.status(204).json({
        status: "success"
    })
})

const port = process.env.PORT || 3001;
app.listen(port,() => {
    console.log(`server is up and running on port ${port}`)
});
