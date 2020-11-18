import express from 'express';
import storeController from '../controllers/store.controller'

const {createStore, getStore, getAllStore} = storeController 
const router = express.Router();


router.post('/', createStore);
router.get('/', getAllStore);
router.get('/:storeId', getStore);

export default router;