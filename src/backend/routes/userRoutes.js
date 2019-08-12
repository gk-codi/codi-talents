import { Router } from 'express';

import {
  postUsers,
  getUsers,
  getUser,
  putUser,
  deleteUser,
} from '../controllers/userController';

const router = Router();

router
  .route('/')
  .post(postUsers)
  .get(getUsers);

router
  .route('/:id')
  .get(getUser)
  .put(putUser)
  .delete(deleteUser);

export default router;
