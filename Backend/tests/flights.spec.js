// tests/flights.test.js
/* eslint-env mocha */
//
import request from 'supertest';
import chai from 'chai';
import { app, startTestServer } from './testFlights.js';

const { expect } = chai;
let server;

describe('Flight Lifecycle Test', () => {
  const flightId = 1;

  before(async function () {
    this.timeout(100000);
    server = await startTestServer();
  });

  after(async () => {
    server.close();
  });

  it('should read a flight', async () => {
    // === 1. Read ===
    const readRes = await request(app)
      .get(`/read-product/${flightId}`)
      .expect(200);

    expect(readRes.body).to.have.property('company', 'El Al');
  });

  // it('should return a list of all products', async () => {
  //   // === 1. Create ===
  //   const newProduct = {
  //     name: `Test Product ${Date.now()}`,
  //     category: 'Test Category',
  //     description: 'A product created for full lifecycle test',
  //     price: '49.99',
  //     datasheet_url: 'https://example.com/datasheet.pdf',
  //     image_url: 'https://example.com/main.jpg',
  //     extra_images: [
  //       'https://example.com/extra1.jpg',
  //       'https://example.com/extra2.jpg',
  //     ],
  //   };

  //   const createRes = await request(app)
  //     .post('/create-product')
  //     .send(newProduct)
  //     .expect(201);

  //   expect(createRes.body).to.have.property('id');
  //   createdProductId = createRes.body.id;

  //   const res = await request(app).get('/read-all-products').expect(200);

  //   expect(res.body).to.be.an('array');
  //   if (res.body.length > 0) {
  //     expect(res.body[0]).to.have.property('name');
  //   }
  // });
});
