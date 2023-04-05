import type { NextApiRequest, NextApiResponse } from "next";
import { ErrorType, User } from "@/api.types";

const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    age: 28,
    isActive: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    age: 35,
    isActive: false,
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bobjohnson@example.com",
    age: 42,
    isActive: true,
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[] | ErrorType>
) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ message: "Error getting users." });
      }
      break;
    case "POST":
      res.status(200).json(users);
      break;
    default:
      res.status(400).json(users);
      break;
  }
}
