import { VerusIdInterface, primitives } from 'verusid-ts-client'

export const VerusRPC = new VerusIdInterface(
  'VRSC',
  process.env.VERUS_API || 'https://api.verus.services'
)
const requestedAccess = new primitives.RequestedPermission(
  primitives.IDENTITY_VIEW.vdxfid
)
const LoginConsentRequest = async ({
  callback,
  session,
}: {
  callback: string
  session: string
}) => {
  //load info
  let blockHeight, identity, chainId

  try {
    blockHeight = await VerusRPC.interface.getInfo()
    //check for the identity
    //can be either Id or the address of the Id
    //but has to be of a verusid
    identity = await VerusRPC.interface.getIdentity(
      process.env.VERUSID || 'VerusID Login@'
    )
    chainId = await VerusRPC.getChainId()
  } catch (error) {
    console.error(error)
  }

  if (!blockHeight?.result && !identity?.result) {
    throw new Error('LoginConsentRequest failed due to know info or identity')
  }
  identity = identity?.result

  const redirectUri = new primitives.RedirectUri(
    `${callback}/callback?session=${session}&`,
    primitives.LOGIN_CONSENT_REDIRECT_VDXF_KEY.vdxfid
  )
  // const redirectUri = new primitives.RedirectUri(
  //   `http://192.168.86.69:3000/api/auth/webhook`,
  //   primitives.LOGIN_CONSENT_WEBHOOK_VDXF_KEY.vdxfid
  // )
  primitives.ApiRequest
  // const test = await VerusRPC.interface.request<GetVdxfidResponse['result']>(
  //   new GetVdxfidRequest(
  //     chainId as string,
  //     '`vrsc::verusio.website.login.${session}`'
  //   )
  // )
  // const test = await FetchVdxfId(`vrsc::verusio.website.login.${session}`)
  // const test = await FetchVdxfId(`i6FRvkoT1GPH3PtN5FvvTfzFmcYHVtefS8`)
  //3355ca2fa5540ca8fd801f602db22a9bc25f6e1e
  //3355ca2fa5540ca8fd801f602db22a9bc25f6e1e

  const created_at = Number(Math.round(Date.now() / 1000).toFixed(0))
  const identityaddress = 'iKaDagEZfB1QPtkyKx558FGTYiUFBkCQBV'
  const challenge = new primitives.LoginConsentChallenge({
    challenge_id: 'iHjZfUUkQ5638dy5o3LsugcpbBZ8aMQ1Y7',
    requested_access: [requestedAccess],
    redirect_uris: [redirectUri],

    created_at,
  })

  const req = await VerusRPC.createLoginConsentRequest(
    identityaddress,
    challenge,
    'UtaZok2q7cPCm8azepvBY53dDqkAQ4vHZQBJRp2q9GDseKcEFCE8',
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    identity!,
    blockHeight?.result?.longestchain,
    chainId
  )

  // console.log(req)
  const verified = await VerusRPC.verifyLoginConsentRequest(
    req,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    identity!,
    chainId
  )

  if (verified) {
    return req.toWalletDeeplinkUri()
  }
  return Error('unable to create a valid consent Request')
}
// curl --data-binary '{"jsonrpc":"1.0","id":"curltext","method":"getvdxfid","params" : ["vrsc::verusio.website.login"]}' -H 'content-type:text/plain;' https://api.verus.services
export default LoginConsentRequest
