import express, { Request, Response } from 'express'
import resizeRoute from './api/resizeRoute'

const routes = express.Router()

routes.get('/', (req: Request, res: Response) => {
    res.send('This is a Route')
})

routes.use('/resizedImage', resizeRoute)
routes.use('/', express.static('./images'))

export default routes
