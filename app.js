const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;

// Allow cross-origin request
app.use(cors());
// create a middleware as a single route. and this route will be like an end point to interact with endpoint data . graphqlHTTP will be called as soon as getting a request to /graphql route
app.use(
  "/graphql",
  graphqlHTTP({
    // shcema should be passed here
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Listening for requests on port ${PORT}`);
});
