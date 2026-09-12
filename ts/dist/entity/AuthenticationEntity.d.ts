import { NidCorrectionPortalEntityBase } from '../NidCorrectionPortalEntityBase';
import type { NidCorrectionPortalSDK } from '../NidCorrectionPortalSDK';
import type { Control } from '../types';
import type { Authentication, AuthenticationCreateData } from '../NidCorrectionPortalTypes';
declare class AuthenticationEntity extends NidCorrectionPortalEntityBase<Authentication> {
    constructor(client: NidCorrectionPortalSDK, entopts: any);
    make(this: AuthenticationEntity): AuthenticationEntity;
    create(this: any, reqdata?: AuthenticationCreateData, ctrl?: Control): Promise<AuthenticationEntity>;
}
export { AuthenticationEntity };
