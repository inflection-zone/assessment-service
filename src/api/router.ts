import express from "express";
import { Logger } from "../common/logger";
import { register as registerClientRoutes } from "./api.client/api.client.routes";
import { register as registerFileResourceRoutes } from './file.resource/file.resource.routes';
import { register as registerAssessmentRoutes } from './assessment/assessment/assessment.routes';
import { register as registerAssessmentTemplateRoutes } from './assessment/assessment.template/assessment.template.routes';
import { register as registerFormsRoutes } from './assessment/forms/forms.routes';

////////////////////////////////////////////////////////////////////////////////////

export class Router {

    private _app = null;

    constructor(app: express.Application) {
        this._app = app;
    }

    public init = async (): Promise<boolean> => {
        return new Promise((resolve, reject) => {
            try {

                //Handling the base route
                this._app.get('/api/v1/', (req, res) => {
                    res.send({
                        message : `REANCare API [Version ${process.env.API_VERSION}]`,
                    });
                });

                registerClientRoutes(this._app);
                registerFileResourceRoutes(this._app);
                registerAssessmentRoutes(this._app);
                registerAssessmentTemplateRoutes(this._app);
                registerFormsRoutes(this._app);

                resolve(true);

            } catch (error) {
                Logger.instance().log('Error initializing the router: ' + error.message);
                reject(false);
            }
        });
    };

}
