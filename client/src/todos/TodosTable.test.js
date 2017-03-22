// package dependencies
import React from 'react'
// test depdendencies
import { assert, expect } from 'chai'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
// test target
import TodosTable from 'todos/TodosTable'

describe('<TodosTable/>', () => {

  let addTodoWasCalled = false
  let deleteTodoWasCalled = false

  let props = {
    todos: [],
    addTodo: sinon.spy(),
    deleteTodo: sinon.spy()
  }

  describe('with empty props', () => {
    it('renders 1 div, 1 table and 1 tbody', () => {
      const wrapper = shallow(<TodosTable {...props}/>)
      expect(wrapper.find('div')).to.have.length(1)
      expect(wrapper.find('table')).to.have.length(1)
      expect(wrapper.find('tbody')).to.have.length(1)
    })

    it('renders 1 tr and 3 td\'s', () => {
      const wrapper = shallow(<TodosTable {...props}/>)
      expect(wrapper.find('tr')).to.have.length(1)
      expect(wrapper.find('td')).to.have.length(3)
    })

    it('calls correct function for adding todo', () => {
      const wrapper = mount(<TodosTable {...props}/>)
      wrapper.find('button').simulate('click')
      expect(props.addTodo.calledOnce).to.be.true
    })
  })

  describe('with non-empty props', () => {
    it('maps todos to table rows', () =>{
      // ARRANGE
      let newProps = {...props, todos: [{id: 9238, title: 'pietje', done: true}]}
      // ACT
      const wrapper = shallow(<TodosTable {...newProps}/>)
      // ASSERT
      expect(wrapper.find('tr')).to.have.length(2)
      expect(wrapper.contains(<span>pietje</span>)).to.be.true
      expect(wrapper.find('button')).to.have.length(2)
    })
  })
})