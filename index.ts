import express from "express";
const app = express();

import home from "./routes/home";

app.use('/', home);


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on PORT ${port}`));