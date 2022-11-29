import express from 'express';
import { Loader } from '../../../startup/loader';
import { AssessmentTemplateController } from '../../assessment/assessment.template/assessment.template.controller';

///////////////////////////////////////////////////////////////////////////////////

export const register = (app: express.Application): void => {

    const router = express.Router();
    const authenticator = Loader.authenticator;
    const controller = new AssessmentTemplateController();

    router.post('/:id/nodes', authenticator.authenticateClient, controller.addNode);
    router.get('/:id/nodes/:nodeId', authenticator.authenticateClient, controller.getNode);
    router.put('/:id/nodes/:nodeId', authenticator.authenticateClient, controller.updateNode);
    router.delete('/:id/nodes/:nodeId', authenticator.authenticateClient, controller.deleteNode);

    router.post('/:id/scoring-conditions/', authenticator.authenticateClient, controller.addScoringCondition);
    router.put('/:id/scoring-conditions/:conditionId', authenticator.authenticateClient, controller.updateScoringCondition);
    router.get('/:id/scoring-conditions/:conditionId', authenticator.authenticateClient, controller.getScoringCondition);
    router.delete('/:id/scoring-conditions/:conditionId', authenticator.authenticateClient, controller.deleteScoringCondition);

    router.post('/', authenticator.authenticateClient, controller.create);
    router.get('/search', authenticator.authenticateClient, controller.search);
    router.get('/:id', authenticator.authenticateClient, controller.getById);
    router.put('/:id', authenticator.authenticateClient, controller.update);
    router.delete('/:id', authenticator.authenticateClient, controller.delete);

    router.get('/:id/export', authenticator.authenticateClient, controller.export);
    router.post('/import-file', authenticator.authenticateClient, controller.importFromFile);
    router.post('/import-json', authenticator.authenticateClient, controller.importFromJson);

    app.use('/api/v1/clinical/assessment-templates/', router);
};
