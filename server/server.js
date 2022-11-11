const express = require("express");
require("dotenv").config();
const schema = require("./schema/schema");
const { graphqlHTTP } = require("express-graphql");
const port = process.env.PORT || 5000;

const app = express();

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
