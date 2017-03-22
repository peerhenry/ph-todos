import IndexController from './IndexController'
import TodosController from './todos/TodosController'

const configRoutes = (app) => {
  app.use('/', IndexController);
  app.use('/todos/', TodosController);
}

export { configRoutes };