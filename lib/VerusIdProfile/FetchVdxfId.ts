import { VerusRPC } from '../VerusIdLogin/LoginConsentRequest'
//TODO: need to determine if still valid need

const FetchVdxfId = async (vdxfuri: string) => {
  // const url = `${process.env.NEXT_PUBLIC_VERUSTOOL_URL}/getvdxfid`
  // try {
  //   const result = await fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ vdxfuri: vdxfuri }),
  //   }).then((res) => res.json())

  //   return result
  // } catch (error) {
  //   return null
  //   console.error('error in fetching getvdxfid')
  // }
  try {
    const result = await VerusRPC.interface.getVdxfId(vdxfuri)
    return result
  } catch (error) {
    return null
    console.error('error in getting getvdxfid')
  }
}

export default FetchVdxfId
