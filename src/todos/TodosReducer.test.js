import { expect, assert } from 'chai'
import TodosReducer from './TodosReducer'
import { GET_TODOS } from './TodosActionTypes'
import { CALLING, SUCCESS, ERROR } from 'async/AsyncStatus'
import { Map, List } from 'immutable'

describe('TodosReducer', () => {
  
  it('Should return unmodified state when action type is unkown.', () => {
    var result = TodosReducer({dummy: 'billy'}, {type: 'whatever'})

    // assert
    expect(result.dummy).to.equal('billy')
  })

  it('GET_TODOS CALLING sets calling to true', () => {
    const initialState = Map({})
    const result = TodosReducer(initialState, {type: GET_TODOS, status: CALLING, payload: {}})

    // assert
    expect(result.get('calling')).to.be.true
  })

  it('GET_TODOS ERROR sets calling to false', () => {
    const initialState = Map({})
    const result = TodosReducer(initialState, {type: GET_TODOS, status: ERROR, payload: {}})

    // assert
    expect(result.get('calling')).to.be.false
  })

  it('GET_TODOS SUCCESS puts todos from payload into state', () => {
    const initialState = Map({})
    const result = TodosReducer(initialState, {type: GET_TODOS, status: SUCCESS, payload: {todos: [{id: 647, title: 'johnson', done: false}]}})

    // assert
    expect(result.get('calling')).to.be.false
    const todos = result.get('todos')
    expect(List.isList(todos)).to.be.true
  })

})