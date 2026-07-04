# Typed models for the NidCorrectionPortal SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Application:
    reason: str
    data: Optional[Any] = None
    message: Optional[str] = None
    note: Optional[str] = None
    success: Optional[bool] = None


@dataclass
class ApplicationLoadMatch:
    id: str


@dataclass
class ApplicationCreateData:
    id: str


@dataclass
class Authentication:
    otp: str
    password: str
    username: str
    message: Optional[str] = None
    session_id: Optional[str] = None
    success: Optional[bool] = None
    token: Optional[str] = None
    user: Optional[dict] = None


@dataclass
class AuthenticationCreateData:
    message: Optional[str] = None
    otp: Optional[str] = None
    password: Optional[str] = None
    session_id: Optional[str] = None
    success: Optional[bool] = None
    token: Optional[str] = None
    user: Optional[dict] = None
    username: Optional[str] = None


@dataclass
class CorrectionRequest:
    applicant_name: Optional[str] = None
    category: Optional[str] = None
    data: Optional[Any] = None
    id: Optional[str] = None
    nid: Optional[str] = None
    source: Optional[str] = None
    status: Optional[str] = None
    submitted_at: Optional[str] = None
    success: Optional[bool] = None
    updated_at: Optional[str] = None


@dataclass
class CorrectionRequestLoadMatch:
    id: str


@dataclass
class CorrectionRequestListMatch:
    applicant_name: Optional[str] = None
    category: Optional[str] = None
    data: Optional[Any] = None
    id: Optional[str] = None
    nid: Optional[str] = None
    source: Optional[str] = None
    status: Optional[str] = None
    submitted_at: Optional[str] = None
    success: Optional[bool] = None
    updated_at: Optional[str] = None

