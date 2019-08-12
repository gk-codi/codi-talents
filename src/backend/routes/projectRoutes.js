import { Router } from 'express';

import {
  postProjects,
  getProjects,
  getProject,
  putProject,
  deleteProject,
} from '../controllers/projectController';

const router = Router();

router
  .route('/:id/projects')
  .post(postProjects)
  .get(getProjects);

router
  .route('/:id')
  .get(getProject)
  .put(putProject)
  .delete(deleteProject);

export default router;
