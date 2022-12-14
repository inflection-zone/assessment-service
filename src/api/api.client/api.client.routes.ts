import express from 'express';
import { ApiClientController } from './api.client.controller';

export const register = (app: express.Application): void => {

    const router = express.Router();
    const controller = new ApiClientController();

    router.post('/', controller.create);
    router.get('/search', controller.search);
    router.get('/:id', controller.getById);
    router.put('/:id', controller.update);
    router.delete('/:id', controller.delete);

    router.get('/:clientCode/current-api-key', controller.getCurrentApiKey);
    router.put('/:clientCode/renew-api-key', controller.renewApiKey);

    app.use('/api/v1/api-clients', router);
};

