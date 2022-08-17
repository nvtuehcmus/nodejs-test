import express from "express";
import jwt from "jsonwebtoken";
interface LoginRequestType {
  username: string; // nvtue
  pwd: string; // 1234
}
//body , params, query

const userDemo = {
  username: "nvtue",
  pwd: "1234",
};
export const postLoginHandler = async (
  req: express.Request<any, any, LoginRequestType>,
  res: express.Response
) => {
  // goi xun database lay du lieu

  const user = {
    username: req.body?.username,
    pwd: req.body?.pwd,
  };
  // if else => services
  if (user.username && user.pwd) {
    if (userDemo.username === user.username && userDemo.pwd === user.pwd) {
      const token = jwt.sign(userDemo, process.env.SECRET_TOKEN ?? "");

      return res.send({
        token: token,
      });
    }
  }

  res.status(400).json({
    error: "can not find username or password",
  });
};
