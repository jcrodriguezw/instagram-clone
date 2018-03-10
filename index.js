import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import typeDefs from './schemas'
import resolvers from './resolvers'
import { makeExecutableSchema } from 'graphql-tools'
import bodyParser from 'body-parser'

const schema = makeExecutableSchema ({
  typeDefs,
  resolvers
})

const PORT = 3000
const app = express()

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}))
app.use('/graphiql', graphiqlExpress({endpointURL:'/graphql'}))

app.listen(PORT, () => {
  console.log('server on port 3000')
})
