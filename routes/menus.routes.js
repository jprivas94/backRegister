import { Router } from 'express';
import { getMenus, getMenu, createMenu, deleteMenu, updateMenu } from '../controllers/menu.controllers.js';
const router = Router();

router.get('/menus', getMenus);

router.get('/menus/:id', getMenu);

router.post('/menus', createMenu);

router.put('/menus/:id', updateMenu);

router.delete('/menus/:id', deleteMenu);

export default router;
