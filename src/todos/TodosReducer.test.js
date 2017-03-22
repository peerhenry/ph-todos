import { expect, assert } from 'chai'
import TodosReducer from './TodosReducer'
import { GET_TODOS, ADD_TODO, DELETE_TODO } from './TodosActionTypes'
import { CALLING, SUCCESS, ERROR } from 'async/AsyncStatus'
import { Map, List } from 'immutable'

describe('TodosReducer', () => {
  
  const emptyState = Map({})

  it('Should throw an error if action has no type.', () => {
    // ARRANGE
    const action = {}
    // ACT
    const result = TodosReducer({dummy: 'billy'}, action)
    // ASSERT
    expect(result.dummy).to.equal('billy')
  })

  it('Should return unmodified state when action type is unhandled.', () => {
    // ARRANGE
    const action = {type: 'whatever'}
    // ACT
    const result = TodosReducer({dummy: 'billy'}, action)
    // ASSERT
    expect(result.dummy).to.equal('billy')
  })

  describe('GET_TODOS', () => {

    function createAction(status){
      return {type: GET_TODOS, status: status, payload: {}}
    }

    it('CALLING sets calling to true', () => {
      // ARRANGE
      const action = createAction(CALLING)
      // ACT
      const result = TodosReducer(emptyState, action)
      // ASSERT
      expect(result.get('calling')).to.be.true
    })

    it('ERROR sets calling to false', () => {
      // ARRANGE
      const action = createAction(ERROR)
      // ACT
      const result = TodosReducer(emptyState, action)
      // ASSERT
      expect(result.get('calling')).to.be.false
    })

    it('SUCCESS sets calling to false', () => {
      // ARRANGE
      const action = createAction(SUCCESS)
      // ACT
      const result = TodosReducer(emptyState, action)
      // ASSERT
      expect(result.get('calling')).to.be.false
    })

    it('SUCCESS both the collection of todos and the todos themselves are Immutable.Map', () => {
      // ARRANGE
      const todos = { '647': {id: 647, title: 'johnson', done: false} }
      const action = createAction(SUCCESS)
      // ACT
      const result = TodosReducer(emptyState, { ...action, payload: {todos: todos} })
      // ASSERT
      const todosResult = result.get('todos')
      const todoResult = todosResult.get('647')
      expect(Map.isMap(todosResult)).to.be.true
      expect(Map.isMap(todoResult)).to.be.true
    })

    it('SUCCESS returns expected collection', () => {
      // ARRANGE
      const todos = { '647': {id: 647, title: 'johnson', done: true} }
      const action = createAction(SUCCESS)
      // ACT
      const result = TodosReducer(emptyState, { ...action, payload: {todos: todos} })
      // ASSERT
      const todosResult = result.get('todos')
      const todoResult = todosResult.get('647')
      expect(todosResult.size).to.equal(1)
      expect(todoResult.get('id')).to.equal(647)
      expect(todoResult.get('title')).to.equal('johnson')
      expect(todoResult.get('done')).to.be.true
    })
  })

  describe('ADD_TODO', () => {
    function createAction(status){
      return {type: ADD_TODO, status: status, payload: {}}
    }

    it('CALLING sets calling to true', () => {
      // ARRANGE
      const action = createAction(CALLING)
      // ACT
      const result = TodosReducer(emptyState, action)
      // ASSERT
      expect(result.get('calling')).to.be.true
    })

    it('ERROR sets calling to false', () => {
      // ARRANGE
      const action = createAction(ERROR)
      // ACT
      const result = TodosReducer(emptyState, action)
      // ASSERT
      expect(result.get('calling')).to.be.false
    })

    it('SUCCESS sets calling to false', () => {
      // ARRANGE
      const state = emptyState.merge({todos: Map({})})
      const action = createAction(SUCCESS)
      // ACT
      const result = TodosReducer(state, {...action, payload: {id: 456, title: 'yo', done: true}})
      // ASSERT
      expect(result.get('calling')).to.be.false
    })
  })

  describe('DELETE_TODO', () => {
    function createAction(status){
      return { type: DELETE_TODO, status: status, payload: {} }
    }

    it('CALLING sets calling to true', () => {
      // ARRANGE
      const action = createAction(CALLING)
      // ACT
      const result = TodosReducer(emptyState, action)
      // ASSERT
      expect(result.get('calling')).to.be.true
    })

    it('ERROR sets calling to false', () => {
      // ARRANGE
      const action = createAction(ERROR)
      // ACT
      const result = TodosReducer(emptyState, action)
      // ASSERT
      expect(result.get('calling')).to.be.false
    })

    it('SUCCESS sets calling to false', () => {
      // ARRANGE
      const state = emptyState.merge({todos: Map({})})
      const action = createAction(SUCCESS)
      // ACT
      const result = TodosReducer(state, {...action, payload: {id: 456}})
      // ASSERT
      expect(result.get('calling')).to.be.false
    })
  })

})