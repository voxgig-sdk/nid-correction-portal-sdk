# Typed models for the NidCorrectionPortal SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class ApplicationRequired(TypedDict):
    reason: str


class Application(ApplicationRequired, total=False):
    notes: str


class ApplicationLoadMatch(TypedDict):
    id: str


class ApplicationCreateDataRequired(TypedDict):
    id: str
    reason: str


class ApplicationCreateData(ApplicationCreateDataRequired, total=False):
    notes: str


class AuthenticationRequired(TypedDict):
    otp: str
    password: str
    username: str


class Authentication(AuthenticationRequired, total=False):
    id: str
    message: str
    name: str
    organization: str
    role: str
    sessionId: str
    success: bool


class AuthenticationCreateDataRequired(TypedDict):
    otp: str
    password: str
    username: str


class AuthenticationCreateData(AuthenticationCreateDataRequired, total=False):
    id: str
    message: str
    name: str
    organization: str
    role: str
    sessionId: str
    success: bool


class CorrectionRequest(TypedDict, total=False):
    applicantName: str
    category: str
    changes: list
    documents: list
    history: list
    id: str
    nid: str
    notes: str
    source: str
    status: str
    submittedAt: str
    updatedAt: str


class CorrectionRequestLoadMatch(TypedDict):
    id: str


class CorrectionRequestListMatch(TypedDict, total=False):
    applicantName: str
    category: str
    changes: list
    documents: list
    history: list
    id: str
    nid: str
    notes: str
    source: str
    status: str
    submittedAt: str
    updatedAt: str
