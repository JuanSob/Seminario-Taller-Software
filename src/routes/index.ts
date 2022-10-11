import {Router} from 'express';
import CashFlowRouter from './CashFlows';
import UserRouter from './Usuario';

const router = Router();

//Esto ayuda a que se pueda llegar a visualizar de la manera
//http://localhost:3001/cashflow/byindex/1
router.use('/cashflow', CashFlowRouter);
router.use('/user', UserRouter);

export default router;
