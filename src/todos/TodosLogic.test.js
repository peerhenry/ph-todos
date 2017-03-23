import { assert, expect } from 'chai'
import sinon from 'sinon'
import TodosLogic from './TodosLogic'

describe('TodosLogic', () => {
    let todosData = {
      getTodos: sinon.spy(),
      addTodo: sinon.spy(),
      deleteTodo: sinon.spy()
    }
    const logic = new TodosLogic(todosData)

    it('should call getTodos from data layer', () => {
      // ARRANGE
      // ACT
      logic.getTodos()
      // ASSERT
      expect(todosData.getTodos.calledOnce).to.be.true
    })

    it('should call addTodo from data layer', () => {
      // ARRANGE
      // ACT
      logic.addTodo('hi', true)
      // ASSERT
      expect(todosData.getTodos.calledOnce).to.be.true
    })

    it('should call deleteTodo from data layer', () => {
      // ARRANGE
      // ACT
      logic.deleteTodo(5)
      // ASSERT
      expect(todosData.getTodos.calledOnce).to.be.true
    })
  }
)