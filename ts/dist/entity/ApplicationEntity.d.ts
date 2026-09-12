import { NidCorrectionPortalEntityBase } from '../NidCorrectionPortalEntityBase';
import type { NidCorrectionPortalSDK } from '../NidCorrectionPortalSDK';
import type { Control } from '../types';
import type { Application, ApplicationLoadMatch, ApplicationCreateData } from '../NidCorrectionPortalTypes';
declare class ApplicationEntity extends NidCorrectionPortalEntityBase<Application> {
    constructor(client: NidCorrectionPortalSDK, entopts: any);
    make(this: ApplicationEntity): ApplicationEntity;
    load(this: any, reqmatch?: ApplicationLoadMatch, ctrl?: Control): Promise<ApplicationEntity>;
    create(this: any, reqdata?: ApplicationCreateData, ctrl?: Control): Promise<ApplicationEntity>;
}
export { ApplicationEntity };
