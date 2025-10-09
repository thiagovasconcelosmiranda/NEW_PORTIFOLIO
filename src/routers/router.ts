import { Router } from "express";
import * as homeController  from '../controllers/home';

export const router = Router();

router.get('/', homeController.home);