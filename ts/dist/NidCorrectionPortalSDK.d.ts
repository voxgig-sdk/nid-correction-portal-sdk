import { ApplicationEntity } from './entity/ApplicationEntity';
import { AuthenticationEntity } from './entity/AuthenticationEntity';
import { CorrectionRequestEntity } from './entity/CorrectionRequestEntity';
export type * from './NidCorrectionPortalTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { NidCorrectionPortalEntityBase } from './NidCorrectionPortalEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class NidCorrectionPortalSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Application(entopts?: Record<string, any>): ApplicationEntity;
    Authentication(entopts?: Record<string, any>): AuthenticationEntity;
    CorrectionRequest(entopts?: Record<string, any>): CorrectionRequestEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): NidCorrectionPortalSDK;
    tester(testopts?: any, sdkopts?: any): NidCorrectionPortalSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof NidCorrectionPortalSDK;
export { stdutil, config, BaseFeature, NidCorrectionPortalEntityBase, NidCorrectionPortalSDK, SDK, };
export type { DirectResult };
