import axios from 'axios'
import { assert, expect } from 'chai'
import sinon from 'sinon'
import { getThunk, postThunk } from './AxiosThunks'
import { CALLING, SUCCESS, ERROR } from './AsyncStatus';

describe('AxiosThunks', () => {
  
  const DUMMY_TYPE = 'dummytype'
  const dummyUrl = '/dummyUrl'

  describe('getThunk', () => {
    it('should return a function', () => {
      // ACT
      const result = getThunk(DUMMY_TYPE, dummyUrl)
      // ASSERT
      assert.isFunction(result)
    })

    it('execution should call axios', () => {
      // ARRANGE
      const resolved = new Promise((r) => r({ data: []}))
      sinon.stub(axios, 'get').returns(resolved)
      const thunk = getThunk(DUMMY_TYPE, dummyUrl)
      var dispatch = sinon.stub()
      // ACT
      thunk(dispatch)
      // ASSERT
      sinon.assert.calledOnce(axios.get)
      expect(axios.get.firstCall.args[0]).to.equal(dummyUrl)
      axios.get.restore()
    })

    // Calling fake server takes too fucking long man
    /*describe('calling fake server', () => {
      var sandbox, server
      var dispatch, disptachCalling, disptachSuccess, disptachError
      var postFunction

      beforeEach(() => {
        sandbox = sinon.sandbox.create()
        server = sandbox.useFakeServer()
        server.respondImmediately
        dispatch = sandbox.stub()
        disptachCalling = dispatch.withArgs(sinon.match({type: DUMMY_TYPE, status: CALLING}))
        disptachSuccess = dispatch.withArgs(sinon.match({type: DUMMY_TYPE, status: SUCCESS, payload: {"stuff": "yesyes"}}))
        disptachError = dispatch.withArgs(sinon.match({type: DUMMY_TYPE, status: ERROR}))
        postFunction = postThunk(DUMMY_TYPE, dummyUrl)
      })

      afterEach(() => {
        server.restore()
        sandbox.restore()
      })

      it('should dispatch correct actions on internal server error', (done) => {
        server.respondWith("GET", dummyUrl, [500,
        { "Content-Type": "application/json" }, '{"nothing": "nothing"}'])
        postFunction(dispatch)
        .then(() => {
          sinon.assert.calledOnce(disptachError)
        })
        .then(done, done)
        sinon.assert.calledOnce(disptachCalling)
        server.respond()
      })

      it('should dispatch correct actions on success', (done) => {
        server.respondWith("GET", dummyUrl, [200,
        { "Content-Type": "application/json" }, 
        '{ "stuff": "yesyes" }'])
        postFunction(dispatch)
        .then(() => {
          sinon.assert.calledOnce(disptachError)
        })
        .then(done, done)
        sinon.assert.calledOnce(disptachCalling)
        server.respond()
      })
    })//*/
  })

  describe('postThunk', () => {
    it('should return a function', () => {
      // ACT
      const result = postThunk('dummytype', 'pietje')
      // ASSERT
      assert.isFunction(result)
    })

    it('execution should call axios', () => {
      // ARRANGE
      const resolved = new Promise((r) => r({ data: []}))
      sinon.stub(axios, 'post').returns(resolved)
      const dummyRequest = {'oh': 'hi'}
      const thunk = postThunk(DUMMY_TYPE, dummyUrl, dummyRequest)
      var dispatch = sinon.stub()
      // ACT
      thunk(dispatch)
      // ASSERT
      sinon.assert.calledOnce(axios.post)
      expect(axios.post.firstCall.args[0]).to.equal(dummyUrl)
      expect(axios.post.firstCall.args[1]).to.equal(dummyRequest)
      axios.post.restore()
    })

    // Calling fake server takes too fucking long man
    /*describe('calling fake server', () => {

      var sandbox;
      var server;
      var dispatch, disptachCalling, disptachSuccess, disptachError;
      const DUMMY_TYPE = 'dummytype';
      const dummyUrl = '/dummyUrl';
      var postFunction;

      beforeEach(() => {
        sandbox = sinon.sandbox.create()
        server = sandbox.useFakeServer()
        dispatch = sandbox.stub()
        disptachCalling = dispatch.withArgs(sinon.match({type: DUMMY_TYPE, status: CALLING}))
        disptachSuccess = dispatch.withArgs(sinon.match({type: DUMMY_TYPE, status: SUCCESS, payload: {"stuff": "yesyes"}}))
        disptachError = dispatch.withArgs(sinon.match({type: DUMMY_TYPE, status: ERROR}))
        postFunction = postThunk(DUMMY_TYPE, dummyUrl)
      })

      afterEach(() => {
        server.restore()
        sandbox.restore()
      })

      it('should dispatch correct actions on internal server error', (done) => {
         server.respondWith("POST", dummyUrl, [500,
        { "Content-Type": "application/json" }, '{"nothing": "nothing"}'])

        postFunction(dispatch)
        .then(() => {
          sinon.assert.calledOnce(disptachError)
        })
        .then(done, done)

        sinon.assert.calledOnce(disptachCalling)
      })

      it('should dispatch correct actions on success', (done) => {
        server.respondWith("POST", dummyUrl, [200,
        { "Content-Type": "application/json" }, 
        '{ "stuff": "yesyes" }'])
        postFunction(dispatch)
        .then(() => {
          sinon.assert.calledOnce(disptachError)
        })
        .then(done, done)
        sinon.assert.calledOnce(disptachCalling)
        server.respond()
      })
    })//*/
  })

})