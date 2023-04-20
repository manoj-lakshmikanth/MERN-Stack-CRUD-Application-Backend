import { MongoClient } from 'mongodb';
const Connection = async () => {
  try {
    let con = new MongoClient(
      'mongodb+srv://root:root@cluster0.dzjjnon.mongodb.net/test'
    );
    let monConnect = await con.connect();
    let dbConnect = await monConnect.db('user');
    let collection = await dbConnect.collection('vloggers');
    console.log('Database is succesfully connected');
    return collection;
  } catch (error) {
    console.log('Error while connecting database', error);
  }
};

export default Connection;
// import mongoose from 'mongoose';
// import { MongoClient } from 'mongodb';

// const Connection = async () => {
//   let url = 'mongodb://0.0.0.0:27017';
//   try {
//     let con = new MongoClient(url);
//     let dbConnect = await con.connect();
//     let dbs = await dbConnect.db('user');
//     let collection = await dbs.collection('student');
//     console.log('Database succesfully connected');
//     return collection;
//   } catch (error) {
//     console.log('Error while connecting port', error);
//   }

//   // try {
//   //   await mongoose.connect(url, {
//   //     useUnifiedTopology: true,
//   //     useNewUrlParser: true,
//   //   });
//   //   console.log('Database succesfully connected');
//   // } catch (error) {
//   //   console.log('Error while connecting port', error);
//   // }
// };

// export default Connection;
