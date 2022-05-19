import { DocumentNode } from 'graphql'
import { IResolvers } from '@graphql-tools/utils'

import { CanBeArray } from '~/types'

type GraphQLModule = {
  typeDefs: CanBeArray<DocumentNode>
  resolvers: CanBeArray<IResolvers>
}

export function mergeModules(modules: CanBeArray<GraphQLModule>): GraphQLModule {
  if (!Array.isArray(modules)) return modules

  const typeDefs = modules.reduce<DocumentNode[]>((memo, module) => memo.concat(module.typeDefs), [])
  const resolvers = modules.reduce<IResolvers[]>((memo, module) => memo.concat(module.resolvers), [])

  return { typeDefs, resolvers }
}
