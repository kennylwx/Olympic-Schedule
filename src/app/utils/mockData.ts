import { nanoid } from "nanoid";
import Event from "../models/Event";

const events: Event[] = [
  { id: nanoid(), title: "Event 1", description: "Description 1" },
  { id: nanoid(), title: "Event 2", description: "Description 2" },
];

export default events;
