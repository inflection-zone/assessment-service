import express from 'express';
import { Loader } from '../../../startup/loader';
import { AssessmentController } from './assessment.controller';

///////////////////////////////////////////////////////////////////////////////////

export const register = (app: express.Application): void => {

    const router = express.Router();
    const authenticator = Loader.authenticator;
    const controller = new AssessmentController();

    router.post('/:id/start', authenticator.authenticateClient, controller.startAssessment);
    router.get('/:id/score', authenticator.authenticateClient, controller.scoreAssessment);

    router.get('/:id/questions/next', authenticator.authenticateClient, controller.getNextQuestion);
    router.get('/:id/questions/:questionId', authenticator.authenticateClient, controller.getQuestionById);
    router.post('/:id/questions/:questionId/answer', authenticator.authenticateClient, controller.answerQuestion);
    router.post('/:id/question-lists/:listId/answer', authenticator.authenticateClient, controller.answerQuestionList);

    router.post('/', authenticator.authenticateClient, controller.create);
    router.get('/search', authenticator.authenticateClient, controller.search);
    router.get('/:id', authenticator.authenticateClient, controller.getById);
    router.put('/:id', authenticator.authenticateClient, controller.update);
    router.delete('/:id', authenticator.authenticateClient, controller.delete);

    app.use('/api/v1/clinical/assessments/', router);
};
