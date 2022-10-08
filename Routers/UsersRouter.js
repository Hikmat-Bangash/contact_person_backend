import express from 'express';
import { addUser, DeleteUser, fetchingData, SingleUser, UpdateUser } from '../Controller/usersController.js';

const router = express.Router();


router.post('/adduser', addUser);
router.get('/fetchData', fetchingData);
router.get('/fetchData/:id', SingleUser);
router.delete('/:id', DeleteUser);
router.put('/update/:id', UpdateUser);


export default router;