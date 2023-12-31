import express from 'express'
import { engine } from 'express-handlebars'
import { Server as socketIOServer } from 'socket.io'
import cors from 'cors'
import cookieParser from 'cookie-parser'

// root
import { apiRouter } from '../routers/api/router.api.js'
import { viewsRouter } from '../routers/web/router.views.js'

// config
import { PORT } from '../config/config.js'
import { COOKIE_KEY } from '../config/config.js'
// DB
import { conectar } from '../dao/mongoose/mongoose.js'

// middleware
import { apiErrorHandler } from '../middleware/error.handler.js'
import { socketFn } from '../middleware/soketio.rt.js'
import { socketChat } from '../middleware/socketio.chat.js'
import { logger } from '../middleware/loggermid.js'

// Auth
import session from '../middleware/session.js'
import {
  authJwtApi,
  authJwtView,
  passportInitialize,
} from '../middleware/authentication.js'

// logger
import { winLogger } from '../utils/logger.js'

const app = express()

await conectar()

app.use(cors({ origin: '*' }))
app.use('/public', express.static('public'))
app.use('/api/assets', express.static('assets'))

app.use(logger)

app.use(cookieParser(COOKIE_KEY))
app.use(session)
app.use(passportInitialize)

app.engine('handlebars', engine())
app.set('views', './views')
app.set('view engine', 'handlebars')

app.use((req, res, next) => {
  req['io'] = io
  next()
})

app.use('/api', apiRouter)
app.use('/', viewsRouter)
app.use(apiErrorHandler)

// @ts-ignore
const httpServer = app.listen(PORT, "0.0.0.0", () => {
  winLogger.verbose(`🌙 app listening on port ${PORT}`)
  winLogger.verbose('🌙 url project: https://coderhouse-proyecto-final-production.up.railway.app/')
})

export const io = new socketIOServer(httpServer)

io.on('connection', async (clientSocket) => {
  winLogger.verbose(`🌙 new connection: ${clientSocket.id}`)
  await socketChat(clientSocket)
  await socketFn()
})
