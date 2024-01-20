import { NextApiRequest, NextApiResponse } from "next";
import events from "../../utils/mockData";
import { nanoid } from "nanoid";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  if (req.method === "POST") {
    try {
      const data = req.body;
      const newEvent = { id: nanoid(), ...data };
      events.push(newEvent);
      res.status(201).json(newEvent);
    } catch (error) {
      res.status(500).json({ error: "Could not create event" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
