import imageProcess from '../middlewares/validation'
import supertest from 'supertest'
import app from '../index'
//endpoint tests
const request: supertest.SuperTest<supertest.Test> = supertest(app)
describe('test the endpoints ', () => {
    it('test /api', async () => {
        const response = await request.get('/api')
        expect(response.status).toBe(200)
    })
    it('test api/image.jpg', async () => {
        const response: supertest.Response = await request.get('/api/green.jpg')
        expect(response.status).toBe(200)
    })
    it('test /api/resizedImage', async () => {
        const response: supertest.Response = await request.get(
            '/api/resizedImage/?image=see&height=200&width=150'
        )
        expect(response.status).toBe(200)
    })
})

describe('Image Processing test', () => {
    it('expects the return value to be true', async () => {
        const name = 'green'
        const resize = await imageProcess(name, 200, 200)
        expect(resize).toBe(true)
    })
})
