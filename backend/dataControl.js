const { MongoClient } = require('mongodb');
exports.getAllData= async(req,res)=>{
    const uri = 'mongodb://localhost:27017';

    const dbName = 'insights';
    const collectionName = 'dashboard';
        try {
          // Connect to MongoDB
          const client = new MongoClient(uri);
          await client.connect().then(console.log("Mongo DB connected!"));
      
          // Access the database and collection
          const db = client.db(dbName);
          const collection = db.collection(collectionName);
      
          // Retrieve data from the collection
          const data = await collection.find({}).toArray();
      
          // Close the connection
          await client.close();
      
          // Send the response back to the client
          res.status(200).json({message:"Data found",data: data});
        } catch (error) {
          // Handle any errors that occur
          console.error(error);
          res.status(500).json({ error: 'An error occurred' });
        }
      };
