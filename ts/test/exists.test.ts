
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { NidCorrectionPortalSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await NidCorrectionPortalSDK.test()
    equal(null !== testsdk, true)
  })

})
