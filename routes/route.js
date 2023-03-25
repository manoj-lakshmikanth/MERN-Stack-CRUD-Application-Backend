import express from 'express';
import {
  addUser,
  deleteUser,
  editUser,
  getUser,
  getUsers,
  loginUser,
} from '../controller/user-controller.js';

let router = express.Router();
router.post('/add', addUser);
router.post('/login', loginUser);
router.get('/get', getUsers);
router.get('/read/:name', getUser);
router.put('/edit/:id', editUser);
router.delete('/delete/:id', deleteUser);

export default router;

// import express from 'express';
// import {
//   addUser,
//   getUsers,
//   getUser,
//   updateUser,
//   deleteUser,
// } from '../controller/user-controller.js';

// const router = express.Router();

// router.post('/add', addUser);
// router.get('/get', getUsers);
// router.get('/edit/:name', getUser);
// router.put('/update/:id', updateUser);
// router.delete('/delete/:id', deleteUser);

// export default router;
