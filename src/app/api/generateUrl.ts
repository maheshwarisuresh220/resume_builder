import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.query;
  const uniquePath = `/resume/${encodeURIComponent(name as string)}`;
  res.status(200).json({ url: `https://yourvercelapp.vercel.app${uniquePath}` });
}
