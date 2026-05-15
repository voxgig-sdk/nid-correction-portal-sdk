package core

type NidCorrectionPortalError struct {
	IsNidCorrectionPortalError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewNidCorrectionPortalError(code string, msg string, ctx *Context) *NidCorrectionPortalError {
	return &NidCorrectionPortalError{
		IsNidCorrectionPortalError: true,
		Sdk:              "NidCorrectionPortal",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *NidCorrectionPortalError) Error() string {
	return e.Msg
}
