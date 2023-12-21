const supertest = require('supertest')
const app = require('./app')

test('/GET todo', async () => {
  const response = await supertest(app)
    .get('/todo')
    .expect('Content-type', /json/)
    .expect(200)
})

test('/Post todo', async () => {
  const date = new Date();
  const mockData = {
    todo: 'Something Else',
    description: 'Some Description else',
    created_at: date.toLocaleString()
  }
  const response = await supertest(app)
    .post('/todo')
    .send(mockData)
    .set('Accept', 'application/json')
    .expect(201)
});

test('/Post todo Error Case', async () => {
  const date = new Date();
  const mockMissing = {
    description: 'Some Description',
    created_at: date.toLocaleString()
  }
  const response = await supertest(app)
    .post('/todo')
    .send(mockMissing)
    .set('Accept', 'application/json')
    .expect(400)
})

test('/Update todo', async () => {
  const mockUpdateData = {
    todo: 'Something Else',
    description: 'Some Description else',
  }
  const response = await supertest(app)
    .put('/todo/:id')
    .send(mockUpdateData)
    .set('Accept', 'application/json')
    .expect(200)
});

test('Delete todo', async () => {
  const response = await supertest(app)
    .delete('/todo/:id')
    .expect(202)
})