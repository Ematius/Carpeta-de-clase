import resquest from 'supertest';
import {createApp} from '../src/app';
import { request } from 'http';

const app = createApp();

const host = 'http://localhost:3000';
 
const urlApi = '/api/films';


describe('GET /api/films', () => {
    it('should return 200', async () => {
        const response = await request(app).get(urlApi);
        expect(response.status).toBe(200);
    })
});