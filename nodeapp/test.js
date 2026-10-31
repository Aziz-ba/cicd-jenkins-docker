const request = require('supertest');
const app = require('./index');

describe('API Edge Cases', () => {
  it('should return 404 for a non-existent route', (done) => {
    request(app)
      .get('/not-found')
      .expect(404, done);
  });
});