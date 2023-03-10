import * as express from "express";
import routes from "./routes";

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(routes);

export default app;
