import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const randomDate = (): Date => {
  const start = new Date(2022, 0, 1);
  const end = new Date();

  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

export default (async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  if (method !== "GET") {
    return res.status(405).json({});
  } else {
    return res.status(200).json({
      data: Array(10)
        .fill(0)
        .map((_: any, i: number) => {
          return {
            id: i + 1,
            title: `Data title - ${i + 1}`,
            date: randomDate(),
          };
        }),
    });
  }
}) as NextApiHandler;
