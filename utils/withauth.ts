// utils/withAuth.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { authenticate } from '../middleware/authenticate';

export const withAuth = (handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    authenticate(req, res, async () => {
      await handler(req, res);
    });
  };
};
