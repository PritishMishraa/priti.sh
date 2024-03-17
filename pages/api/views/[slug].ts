import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const slug = req.query.slug.toString();
    console.log(slug);

    if (req.method === 'POST') {
      const newOrUpdatedViews = await prisma.views.upsert({
        where: { slug },
        create: {
          slug
        },
        update: {
          count: {
            increment: 1
          }
        }
      });

      return res.status(200).json({
        total: newOrUpdatedViews.count.toString()
      });
    }

    if (req.method === 'GET') {
      const views = await prisma.views.findUnique({
        where: {
          slug
        }
      });

      console.log(views.count.toString());

      return res.status(200).json({ views: views.count.toString() });
    }
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
