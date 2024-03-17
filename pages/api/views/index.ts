import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const totalViews = await prisma.views.aggregate({
      _sum: {
        count: true
      }
    });

    console.log(totalViews);

    return res.status(200).json({ views: totalViews._sum.count.toString() });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
