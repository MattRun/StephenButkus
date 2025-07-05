// app/api/protected/admin-data.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { authenticate } from '@/middleware/authenticate';
export const dynamic = 'force-dynamic';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  authenticate(req, res, async () => {
    const { permissions } = (req as any).user;

    if (!permissions.includes('admin')) {
      return res.status(403).json({ message: 'Insufficient permissions' });
    }

    // Only accessible to admins
    res.status(200).json({ message: 'Admin-only data' });
  });
}
