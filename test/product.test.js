import {TestApp} from '../app';
import request from 'supertest';
import mongoose from "mongoose";

describe("product tests", () => {
    let app;
    let product_name;

    beforeAll(() => {
        app = TestApp()
        mongoose.connect(global.__MONGO_URI__);
    })

    afterAll(() => {
        mongoose.connection.close()
    })

    test('/', async () => {
        const { status, _body: body } = await request(app).get('/models/')

        expect(status).toBe(200)
        expect(body).toHaveLength(0)
    });

    test('/signup', async () => {
        const product = {
            name: 'Tornillos',
            price: 250,
            categories: ['Grande', 'Pequeño']
        }
        const {status, _body: body} = await request(app)
        .post('/models/').send(product)

        expect(status).toBe(200)
        expect(body.price).toBe(250)
        product_name = body.name;
    })

})