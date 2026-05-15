
import { Context } from './Context'


class NidCorrectionPortalError extends Error {

  isNidCorrectionPortalError = true

  sdk = 'NidCorrectionPortal'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  NidCorrectionPortalError
}

