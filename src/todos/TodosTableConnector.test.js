import { fromJS } from 'immutable'
import { assert, expect } from 'chai'
import sinon from 'sinon'
import { mapStateToProps, mapDispatchToProps } from './TodosTableConnector'

describe('TodosTableConnector', () => {

  it('maps state to an object with todos as an array', () => {
    // ARRANGE
    const state = fromJS({todos: {'182': {id: 182, title: 'heyho', done: true}}})
    // ACT
    const result = mapStateToProps(state)
    // ASSERT
    assert.isObject(result)
    assert.isArray(result.todos)
  })

  it('should map state to props', () => {
    // ARRANGE
    const state = fromJS({todos: {'182': {id: 182, title: 'heyho', done: true}}})
    // ACT
    const result = mapStateToProps(state)
    // ASSERT
    const todo = result.todos[0]
    assert.isObject(todo)
    expect(todo.id).to.equal(182)
    expect(todo.title).to.equal('heyho')
    expect(todo.done).to.be.true
  })

  it('should map dispatch to props', () => {
    // ARRANGE
    let dispatch = sinon.spy()
    // ACT
    const result = mapDispatchToProps(dispatch)
    // ASSERT
    assert.isObject(result)
    assert.isFunction(result.addTodo)
    assert.isFunction(result.deleteTodo)
  })

})