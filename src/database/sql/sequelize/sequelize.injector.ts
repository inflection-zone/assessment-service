import 'reflect-metadata';
import { DependencyContainer } from 'tsyringe';
import { DatabaseConnector_Sequelize } from './database.connector.sequelize';
import { ApiClientRepo } from './repositories/api.client/api.client.repo';
import { FileResourceRepo } from './repositories/file.resource.repo';
import { AssessmentRepo } from './repositories/assessment/assessment.repo';
import { AssessmentTemplateRepo } from './repositories/assessment/assessment.template.repo';
import { AssessmentHelperRepo } from './repositories/assessment/assessment.helper.repo';
import { ThirdpartyApiRepo } from './repositories/thirdparty.api.repo';

////////////////////////////////////////////////////////////////////////////////

export class SequelizeInjector {

    static registerInjections(container: DependencyContainer) {

        container.register('IDatabaseConnector', DatabaseConnector_Sequelize);

        container.register('IApiClientRepo', ApiClientRepo);
        container.register('IFileResourceRepo', FileResourceRepo);
        container.register('IAssessmentRepo', AssessmentRepo);
        container.register('IAssessmentTemplateRepo', AssessmentTemplateRepo);
        container.register('IAssessmentHelperRepo', AssessmentHelperRepo);
        container.register('IThirdpartyApiRepo', ThirdpartyApiRepo);

    }

}
