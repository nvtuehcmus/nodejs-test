import express from "express";
import {sListUsers} from "../services/sListUsers";

export const listUsersHandler = async (
  req: express.Request,
  res: express.Response
) => {
  const users = await sListUsers();
  return res.send({data: users});
};
