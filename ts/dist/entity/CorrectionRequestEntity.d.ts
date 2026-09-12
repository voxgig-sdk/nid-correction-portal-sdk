import { NidCorrectionPortalEntityBase } from '../NidCorrectionPortalEntityBase';
import type { NidCorrectionPortalSDK } from '../NidCorrectionPortalSDK';
import type { Control } from '../types';
import type { CorrectionRequest, CorrectionRequestLoadMatch, CorrectionRequestListMatch } from '../NidCorrectionPortalTypes';
declare class CorrectionRequestEntity extends NidCorrectionPortalEntityBase<CorrectionRequest> {
    constructor(client: NidCorrectionPortalSDK, entopts: any);
    make(this: CorrectionRequestEntity): CorrectionRequestEntity;
    load(this: any, reqmatch?: CorrectionRequestLoadMatch, ctrl?: Control): Promise<CorrectionRequestEntity>;
    list(this: any, reqmatch?: CorrectionRequestListMatch, ctrl?: Control): Promise<CorrectionRequestEntity[]>;
}
export { CorrectionRequestEntity };
