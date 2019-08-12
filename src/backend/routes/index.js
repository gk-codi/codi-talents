import { Router } from 'express';
// import authRoutes from './authRoutes';
import projectRoutes from './projectRoutes';
import userRoutes from './userRoutes';
const router = Router();

router.get('/', (req, res, next) => {
  res.json({
    success: true,
    data: [],
  });
});
// router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

router.all('/*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Api routes not found',
    data: [],
  });
});
export default router;
