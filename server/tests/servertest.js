const expect = require('expect');

const request = require('supertest');


const {app} = require('./../server');

const {Todo} = require('./../models/todos');




beforeEach((done) => {
    Todo.remove({}).then(() => done());
  });

describe('Post /Tdos', () => {
    it('should create a todos', (done) => {
        var text = "aloha";

        request(app).post('/todos')
            .send(text)
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            }).end((err, res) => {
                if (err) {
                    return (done(err));
                }
            })
        Todo.find().then((todos) => {
            expect(todos.length).toBe(1);
            expect(todos.text).toBe(text);
            done();
        }).catch((e)=>done(e));
    });
});