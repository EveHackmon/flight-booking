// tests/flights.test.js
/* eslint-env mocha */
//
import request from 'supertest';
import chai from 'chai';
import { app, startTestServer } from './testFlights.js';

const { expect } = chai;
let server;

describe('Flight Test', () => {
  const flightId = 1;

  before(async function () {
    this.timeout(10000);
    server = await startTestServer();
  });

  after(() => {
    server?.close();
  });

  it('should read a flight', async () => {
    const readRes = await request(app)
      .get(`/flights/read-flight/${flightId}`)
      .expect(200);

    expect(readRes.body).to.have.property('company', 'El Al');
  });

  it('should return a list of all flights', async () => {
    const res = await request(app).get('/flights/read-all-flights').expect(200);

    expect(res.body).to.be.an('array');
    expect(res.body.length).to.be.greaterThan(0);
    expect(res.body[0]).to.have.property('flight_id');
    expect(res.body[0]).to.have.property('company');
  });
});
