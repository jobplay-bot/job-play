// /pages/api/geocode.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { address } = req.query;
  const apiKey = process.env.GOOGLE_API_KEY;

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address as string,
    )}&key=${apiKey}`,
  );

  const data = await response.json();
  const location = data.results?.[0]?.geometry?.location;

  if (location) {
    res.status(200).json(location);
  } else {
    res.status(404).json({ error: "위치 정보를 찾을 수 없습니다." });
  }
}
