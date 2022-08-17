// import express from "express";

import moment from "moment-timezone";

// import {listUsersHandler} from "./controler/listUsersHandler";
// import {postLoginHandler} from "./controler/postLoginHandler";
// import bodyParser from "body-parser";
// import moment from "moment";
// import dotenv from "dotenv";
// dotenv.config();
// const app = express();

// app.get("/health", (req: express.Request, res: express.Response) =>
//   res.send("ok")
// );

// const arr = [2, 4, 6, 12, 7, 8, 2];

// for (const iterator of arr) {
//   console.log(iterator);
// }

// app.get("/users", listUsersHandler);

// app.post("/login", bodyParser.json(), postLoginHandler);

// app.listen(process.env.PORT, () => {
//   console.log("app running on ", process.env.PORT);
// });

const a = moment("24-09-2022","DD-MM-YYYY").tz("Europe/Oslo").toISOString()
console.log(a)