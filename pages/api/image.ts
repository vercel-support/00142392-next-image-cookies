import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log({ host: req.headers.host, cookies: req.headers.cookie })

  res.status(404).end()
}
