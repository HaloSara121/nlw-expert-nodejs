import cookie from '@fastify/cookie'
import fastify from 'fastify'

import { createPoll } from './routes/create-poll'
import { getPoll } from './routes/get-poll'
import { voteOnPoll } from './routes/vote-on-poll'

export const app = fastify()

app.register(cookie, {
  secret: 'kahsdafhsopdbfasd',
  hook: 'onRequest',
})

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

app.listen({ port: 3333 }).then(() => {
  console.log('http server running!')
})
