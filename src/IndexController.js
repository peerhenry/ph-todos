import { Router } from 'express'

let router = Router()

router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' }) // should replace with send?
  res.sendFile(path.join(__dirname, 'client/public/views/index.html'))
})

export default router