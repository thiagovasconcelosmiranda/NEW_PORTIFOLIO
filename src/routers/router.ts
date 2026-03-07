import { Router } from "express";
import * as homeController  from '../controllers/home';
import * as videoProjectController from '../controllers/video-project';

export const router = Router();

router.get('/', homeController.home);
router.get('/projeto/video/:video', videoProjectController.getVideoProject);
