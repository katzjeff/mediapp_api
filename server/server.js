const express = require("express");
require("dotenv").config();
const cors = require("cors");
const schema = require("./schema/schema");
const { graphqlHTTP } = require("express-graphql");
const port = process.env.PORT || 5000;
const colors = require("colors");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

app.use(cors());

app.use(
  "/mediapp",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
