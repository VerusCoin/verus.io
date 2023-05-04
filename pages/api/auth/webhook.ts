import LoginConsentResponse from '@/lib/VerusIdLogin/LoginConsentResponse'
// import LoginWebhookResponse from '@/lib/VerusIdLogin/LoginWebhookResponse'
import type { NextApiRequest, NextApiResponse } from 'next'
import { io } from 'socket.io-client'
const emit = async (data: any) => {
  const socket = io('http://localhost:3000')

  socket.emit('input-change', data)
  setTimeout(() => socket.disconnect(), 250)
}
export default async (req: NextApiRequest, res: NextApiResponse) => {
  // emit(req.body)
  // const verification = await LoginConsentResponse(
  //   JSON.stringify(req.body),
  //   'WEBHOOK'
  // )
  let verification

  try {
    verification = await LoginConsentResponse(
      JSON.stringify(req.body),
      'WEBHOOK'
    )
    emit(verification)
  } catch (error) {
    console.error(error)
  }

  // console.log(verification)
  res.status(200).json({ message: 'ok' })
}
