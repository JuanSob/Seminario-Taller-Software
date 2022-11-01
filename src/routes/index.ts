import {Router} from 'express';
import CashFlowRouter from './CashFlows';
import UsersRouter from './Users';
import apiKeyMW from '@server/middleware/apiKeyHeaderValidator';
import { jwtValidator } from '@server/middleware/jwtBeaereValidator';

const router = Router();

//Esto ayuda a que se pueda llegar a visualizar de la manera
//http://localhost:3001/cashflow/byindex/1
router.use('/cashflow', apiKeyMW , jwtValidator, CashFlowRouter);
router.use('/security', apiKeyMW, UsersRouter);

export default router;
