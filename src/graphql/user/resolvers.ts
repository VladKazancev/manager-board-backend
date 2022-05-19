import { dataSource } from '~/data-source'
import { User } from '~/entities'

export default {
  Query: {
    getUsers: (): Promise<User[]> => dataSource.getRepository(User).find(),
  },
}
