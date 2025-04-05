const express = require('express')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const cors = require('cors')
const app = express()
const port = process.env.port || 1000

// middlewares
app.use(cors())
app.use(express.json())





// Database

const uri = `mongodb+srv://${process.env.USER_ID}:${process.env.USER_PASSWORD}@cluster0.is5da.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db('foodapp')
    const userData = database.collection('appUser')
    const productData = database.collection('products')


    // - - - - - - USER - - - - - - -

    //------------for privet use only--------------
    /* app.get('/users-data', async(req, res)=>{
      const users = userData.find()
      const result = await users.toArray()
      res.send(result)
      console.log(result)
    }) */



    app.get('/user-data/:id', async(req, res)=>{
        const uid = req.params.id
        const query = { fire_uid: `${uid}` }
        const result = await userData.findOne(query)
        res.send(result)
    })


    app.post('/register-user', async (req, res)=>{
        const user = req.body
        const result = await userData.insertOne(user)
        // console.log(result)
        res.send(result)
    })


    // - - - - - - ADMIN - - - - - - -

    app.get('/all-products', async(req, res) =>{
      const products = productData.find()
      const result = await products.toArray()
      res.send(result)
      // console.log(result)
    })
    
    
    app.get('/product-detail/:id', async(req, res) =>{
      const productID = req.params.id
      const query = { _id: new ObjectId(productID)}
      const result = await productData.findOne(query)
      res.send(result)
      // console.log(result)
    })

    
    app.post('/add-product', async(req, res) => {
      const product = req.body
      const result = await productData.insertOne(product)
      res.send(result)
      // console.log(product)
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res)=>{
    res.send('Server is running....')
    // console.log('Running....')
})


app.listen(port, () =>{
    // console.log(`This website is running on port ${port}`)
})