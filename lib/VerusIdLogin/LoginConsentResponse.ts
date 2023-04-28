//GBg5orWH_4xx-3PflHNBqOX62hcB_VgCGvW4AVxk05q0TGDq2DF_n1qbbEw1J5lc0uKNozlFQWOU1oJWZdraSt3vHSRMeg9ysAUJ8BfPPdpjudQGAUkCBQNaJgABQR8ZXbvD1L2sm7zl1I9OT4G9wH8ovONqsN7OjB6vma1cMhiCe2Z-eVVgMB716O9N3z0HuJrJSfPwMxgm74qt1CVb5VMIvIgKfZzAHIT5TirM7RCjuokB_bkBFJxp3NyyM-0AIpq74vdqKpCBlIhIuehKZAAAAAAAAABWe5qHsXEx9u6y3QvdGR7OSl1gOwEBAAGuLr0oLCwFoopyexqNdvxusznFAf1qARr1uAFcZNOatExg6tgxf59am2xMsJWbQE1PbYD1JtpdGu0sm5uVuCzd7x0kTHoPcrAFCfAXzz3aY7nUBgFJAgUDWiYAAUEgAf-GxT9zAgE-MOe2YErJeNjbzXGYVShqMh2_jnhurbl_zacdF-scHTA-81LCskGvy4CZTyQMPjhsv8PC65T5EhkpwD6PqNScH421diaTivtXxDWcAc0UnGnc3LIz7QAimrvi92oqkIGUiEiV6EpkAAAAAAAAAAG6icTlqHBHKLhjOmPivbKh-kerrgEAAAAAAAABblWVGAN8pslHevIezJa93GHC0qYBY2h0dHA6Ly8xOTIuMTY4Ljg2LjY5OjMwMDAvdmVydXNpZC1sb2dpbi1kZW1vL2NhbGxiYWNrP3Nlc3Npb249OTRhODUwYWEtNTViMi00ZWVhLTlhZDUtMmIzZmJjMGNmZmIzJlZ7moexcTH27rLdC90ZHs5KXWA7AQEA
//94a850aa-55b2-4eea-9ad5-2b3fbc0cffb3

import { primitives } from 'verusid-ts-client'
import base64url from 'base64url'
import { VerusRPC } from './LoginConsentRequest'

const LoginConsentResponse = async (response: string) => {
  const res = new primitives.LoginConsentResponse()
  res.fromBuffer(base64url.toBuffer(response))
  const valid = await VerusRPC.verifyLoginConsentResponse(res)
  let id
  if (valid) {
    id = await VerusRPC.interface.getIdentity(res.decision.request.signing_id)
    id = id.result?.identity.name
  }
  // console.log(res)
  // console.log('result', result)
  return { valid, id }
}

export default LoginConsentResponse
