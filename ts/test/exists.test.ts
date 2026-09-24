
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { NidCorrectionPortalSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = NidCorrectionPortalSDK.test()
    equal(testsdk instanceof NidCorrectionPortalSDK, true,
      'NidCorrectionPortalSDK.test() must return a client synchronously')
  })

})
