import express from 'express';
import storeController from '../controllers/store.controller'

const {createStore, getStore} = storeController 
const router = express.Router();


router.post('/', createStore);
router.get('/:storeId', getStore);

export default router;