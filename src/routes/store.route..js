import express from 'express';
import storeController from '../controllers/store.controller'

const {createStore} = storeController 
const router = express.Router();


router.post('/', createStore);

export default router;