export interface Application {
    id?: string;
}
export interface ApplicationLoadMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface ApplicationCreateData {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface Authentication {
    id?: string;
    message?: string;
    name?: string;
    organization?: string;
    otp: string;
    password: string;
    role?: string;
    sessionId?: string;
    success?: boolean;
    username: string;
}
export interface AuthenticationCreateData {
    id?: string;
    message?: string;
    name?: string;
    organization?: string;
    otp: string;
    password: string;
    role?: string;
    sessionId?: string;
    success?: boolean;
    username: string;
}
export interface CorrectionRequest {
    applicantName?: string;
    category?: string;
    changes?: any[];
    documents?: any[];
    history?: any[];
    id?: string;
    nid?: string;
    notes?: string;
    source?: string;
    status?: string;
    submittedAt?: string;
    updatedAt?: string;
}
export interface CorrectionRequestLoadMatch {
    id: string;
}
export interface CorrectionRequestListMatch {
    applicant_name?: string;
    category?: string;
    limit?: number;
    nid?: string;
    page?: number;
    source?: string;
    status?: string;
}
