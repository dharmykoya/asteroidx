import express from 'express';
import storeController from '../controllers/store.controller'

const {createStore, getStore, getAllStore, deleteStore} = storeController 
const router = express.Router();


router.post('/', createStore);
router.get('/', getAllStore);
router.get('/:storeId', getStore);
router.delete('/:storeId', deleteStore);

export default router;