import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";

const app = express();
const PORT = 2000;

app.use(bodyParser.json());
app.use("/users", userRoutes);

app.listen(PORT, () =>
  console.log(`Sever is running on port: http:://localhost:${PORT}`)
);

app.get("/", (req, res) =>
  res.send(
    "Welcome. Access the users by accessing the /users in the URL. You can view users (GET Request), add users (POST Request), view a specific user (GET Request), delete a user (DELETE Request), and lastly update a user (PATCH Request)."
  )
);
