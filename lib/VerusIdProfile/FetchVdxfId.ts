import { VDXFID } from './ProfileTypes'

const FetchVdxfId = async (vdxfuri: string): Promise<VDXFID | null> => {
  const url = `${process.env.NEXT_PUBLIC_VERUSTOOL_URL}/getvdxfid`
  try {
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ vdxfuri: vdxfuri }),
    }).then((res) => res.json())

    return result
  } catch (error) {
    return null
    console.error('error in fetching getvdxfid')
  }
}

export default FetchVdxfId
