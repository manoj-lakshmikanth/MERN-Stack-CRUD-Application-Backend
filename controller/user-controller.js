import Connection from '../database/db.js';

export async function addUser(req, resp) {
  try {
    let collection = await Connection();
    let postData = await collection.insertOne(req.body);
    resp.status(200).json({ message: 'inserted', data: postData });
  } catch (error) {
    resp.status(400).json({ message: 'error', error });
  }
}

export async function loginUser(req, resp) {
  try {
    let collection = await Connection();
    let loginData = await collection.find({ email: req.body.email }).toArray();
    if (loginData.length) {
      if (loginData[0].password == req.body.password) {
        resp.status(200).json({ message: 'Logged in Succesfully' });
      } else {
        resp.status(200).json({ message: 'Wrong Password' });
      }
    } else {
      resp.status(200).json({ message: 'Incorrect Email' });
    }
  } catch (error) {
    resp.status(400).json({ message: 'error', error });
  }
}

export async function getUsers(req, resp) {
  try {
    let collection = await Connection();
    let getData = await collection.find().toArray();
    resp.status(200).json({ message: 'got', data: getData });
  } catch (error) {
    resp.status(400).json({ message: 'error', error });
  }
}

export async function getUser(req, resp) {
  try {
    let collection = await Connection();
    let getData = await collection.find({ name: req.params.name }).toArray();
    resp.status(200).json({ message: 'got individual data', data: getData });
  } catch (error) {
    resp.status(400).json({ message: 'error', error });
  }
}

export async function editUser(req, resp) {
  try {
    let collection = await Connection();
    let editData = await collection.updateOne(
      { newId: req.params.id },
      { $set: { name: req.body.name, email: req.body.email } }
    );
    resp.status(200).json({ message: 'updated', data: editData });
  } catch (error) {
    resp.status(400).json({ message: 'error', error });
  }
}

export async function deleteUser(req, resp) {
  try {
    let collection = await Connection();
    let deleteData = await collection.deleteOne({ newId: req.params.id });
    resp.status(200).json({ message: 'deleted', data: deleteData });
  } catch (error) {
    resp.status(400).json({ message: 'error', error });
  }
}
// // import User from '../schema/user-schema.js';
// import Connection from '../database/db.js';

// export const addUser = async (req, resp) => {

//   console.log(req.body);
//   try {
//     let collection = await Connection();
//     let insertData = await collection.insertOne(req.body);
//     resp.status(200).json({ message: 'inserted', data: insertData });
//   } catch (error) {
//     resp.status(400).json({ message: 'error', error });
//   }
//   // const user = request.body;
//   // const newUser = new User(user);
//   // try {
//   //   await newUser.save();
//   //   response.status(201).json(newUser);
//   // } catch (error) {
//   //   response.status(409).json({ message: error.message });
//   // }
// };

// export const getUsers = async (req, resp) => {
//   try {
//     let collection = await Connection();
//     // console.log('hi');
//     let getData = await collection.find().toArray();
//     resp.status(200).json({ message: 'read', data: getData });
//   } catch (error) {
//     resp.status(400).json({ message: 'error', error });
//   }
// };

// export const getUser = async (req, resp) => {
//   try {
//     let collection = await Connection();
//     // console.log(req.params.name);
//     let editData = await collection.find({ name: req.params.name }).toArray();
//     resp.status(200).json({ message: 'edit', data: editData });
//   } catch (error) {
//     resp.status(400).json({ message: 'error', error });
//   }
// };

// export const updateUser = async (req, resp) => {
//   try {
//     let collection = await Connection();
//     console.log(req.params.id);
//     let updateData = await collection.updateOne(
//       { newId: req.params.id },
//       {
//         $set: {
//           name: req.body.name,
//           username: req.body.username,
//           email: req.body.email,
//           phone: req.body.phone,
//         },
//       }
//     );
//     resp.status(200).json({ message: 'updated', data: updateData });
//   } catch (error) {
//     resp.status(400).json({ message: 'error', error });
//   }
// };

// export const deleteUser = async (req, resp) => {
//   try {
//     let collection = await Connection();
//     let deletedData = await collection.deleteOne({ newId: req.params.id });
//     resp.status(200).json({ message: 'deleted', data: deletedData });
//   } catch (error) {
//     resp.status(400).json({ message: 'error', error });
//   }
// };
