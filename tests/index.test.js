const { exportAllDeclaration } = require('@babel/types');
const { TestResult } = require('@jest/types');
const request = require('supertest');
const { server, app } = require('../index');

afterAll(async (done) => {
  await server.close()

  await new Promise(resolve => setTimeout(() => resolve(), 500))

  done()
})

describe('Express server home page functionality', () => {
  test('should have status code of 200', async (done) => {
    const response = await request(app).get('/')
    expect(response.statusCode).toEqual(200)

    done()
  })

  test('should return the phrase "Hello World"', async (done) => {
    const response = await request(app).get('/')
    expect(response.body.msg).toEqual("Hello World")
    done()
  });
})

describe('Express server /studentNames functionality', () => {

  test('should return the phrase "Luke"', async (done) => {
    const response = await request(app)
      .post('/studentNames')
      .send({
        studentNames: ["Luke", "Ash", "Alex"]
      })
    expect(response.body.firstStudentName).toEqual("Luke")
    done()
  });
})
