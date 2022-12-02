import {ShoppingApp} from '../app';
import request from 'supertest';
import mongoose from "mongoose";

describe("user tests", () => {
    let app;
    let product_name;

    beforeAll(() => {
        app = ShoppingApp()
        mongoose.connect(global.__MONGO_URI__);
    })

    afterAll(() => {
        mongoose.connection.close()
    })

    test('Read Usuarios --> request exito', async () => {
        const { status, _body: body } = await request(app).get('/user')

        expect(status).toBe(200)
    });

    test('Read Usuarios --> metodo exito', async () => {
        const { status, _body: body } = await request(app).get('/user')

        expect(body.data).toHaveLength(0)
    });

})