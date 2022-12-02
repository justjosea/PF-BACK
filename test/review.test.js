import {ShoppingApp} from '../app';
import request from 'supertest';
import mongoose from "mongoose";

describe("review tests", () => {
    let app;

    beforeAll(() => {
        app = ShoppingApp()
        mongoose.connect(global.__MONGO_URI__);
    })

    afterAll(() => {
        mongoose.connection.close()
    })

    test('Get Reseña de un usuario de cierta puntuación ---> request exito', async () => {
        const { status, _body: body } = await request(app).get('/review/user/hasghd123341/rating/5')

        expect(status).toBe(200)
    })

    test('Get Reseña de un usuario de cierta puntuación ---> request fallo', async () => {
        const { status, _body: body } = await request(app).get('/review/user/hasghd123341/rating/fdsr')

        expect(status).toBe(500)
    })

})