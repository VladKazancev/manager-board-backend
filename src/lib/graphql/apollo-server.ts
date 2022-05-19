import { ApolloServer } from 'apollo-server-express'

import modules from '~/graphql'

export const apolloServer = new ApolloServer({
  typeDefs: modules.typeDefs,
  resolvers: modules.resolvers,
})
