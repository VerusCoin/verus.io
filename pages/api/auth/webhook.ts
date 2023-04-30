import LoginWebhookResponse from '@/lib/VerusIdLogin/LoginWebhookResponse'
import type { NextApiRequest, NextApiResponse } from 'next'
import { io } from 'socket.io-client'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const verification = await LoginWebhookResponse(req.body)
  const emit = async () => {
    const socket = io('http://localhost:3000')

    socket.emit('input-change', verification)
    setTimeout(() => socket.disconnect(), 250)
  }
  emit()

  res.status(200).json({ message: 'ok' })
}
