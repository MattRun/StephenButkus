// pages/api/auth/user-data.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { authenticate } from '@/middleware/authenticate';

export const dynamic = 'force-dynamic';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  authenticate(req, res, async () => {
    res.status(200).json({ message: 'This is protected data' });
  });
}
