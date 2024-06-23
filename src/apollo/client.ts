import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://workspace.raychen.co.uk/graphql",
  // uri: "https://current--raychen1996s-team.apollographos.net/graphql",

  cache: new InMemoryCache(),
});

export default client;
