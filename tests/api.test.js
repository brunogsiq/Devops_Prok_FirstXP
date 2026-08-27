const request = require('supertest');
const app = require('../backend/app');

describe('GET /health', () => {
  it('returns status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});

describe('GET /tasks', () => {
  it('returns the seeded task list', async () => {
    const res = await request(app).get('/tasks');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

describe('POST /tasks', () => {
  it('creates a new task', async () => {
    const res = await request(app).post('/tasks').send({ title: 'Aprender Terraform' });
    expect(res.status).toBe(201);
    expect(res.body).toMatchObject({ title: 'Aprender Terraform', done: false });
  });

  it('rejects a task without title', async () => {
    const res = await request(app).post('/tasks').send({});
    expect(res.status).toBe(400);
  });
});

describe('PUT /tasks/:id', () => {
  it('marks a task as done', async () => {
    const created = await request(app).post('/tasks').send({ title: 'Testar API' });
    const res = await request(app).put(`/tasks/${created.body.id}`).send({ done: true });
    expect(res.status).toBe(200);
    expect(res.body.done).toBe(true);
  });

  it('returns 404 for a missing task', async () => {
    const res = await request(app).put('/tasks/999999').send({ done: true });
    expect(res.status).toBe(404);
  });
});

describe('DELETE /tasks/:id', () => {
  it('removes a task', async () => {
    const created = await request(app).post('/tasks').send({ title: 'Remover depois' });
    const res = await request(app).delete(`/tasks/${created.body.id}`);
    expect(res.status).toBe(204);
  });

  it('returns 404 for a missing task', async () => {
    const res = await request(app).delete('/tasks/999999');
    expect(res.status).toBe(404);
  });
});
