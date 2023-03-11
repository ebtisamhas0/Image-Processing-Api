import express from 'express'
import routes from './routes/index'
const app = express()
const port = 3000
app.use('/api', routes)

//listen method
app.listen(port, () => {
    console.log(`server started at localhost:${port}`)
})

export default app
