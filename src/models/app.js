import express from 'express'
import usuarioControllers from './controllers/usuarioController'
import tarefaControllers from './controllers/tafefaController'
const app = express()
usuarioControllers(app)
tarefaControllers(app)
export default app