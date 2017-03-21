import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import jsdom from 'jsdom'

import TodosTable from 'todos/TodosTable'

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.document = doc
global.window = doc.defaultView;

describe('<TodosTable />', () => {

  let addTodoWasCalled = false
  let deleteTodoWasCalled = false

  let props = {
    todos: [],
    addTodo: sinon.spy(),
    deleteTodo: (id) => { deleteTodoWasCalled = true }
  }

  it('Renders 1 div, 1 table and 1 tbody', () => {
    const wrapper = shallow(<TodosTable {...props}/>)
    expect(wrapper.find('div')).to.have.length(1)
    expect(wrapper.find('table')).to.have.length(1)
    expect(wrapper.find('tbody')).to.have.length(1)
  })

  it('Renders 1 tr and 3 td\'s', () => {
    const wrapper = shallow(<TodosTable {...props}/>)
    expect(wrapper.find('tr')).to.have.length(1)
    expect(wrapper.find('td')).to.have.length(3)
  })

  it('Calls correct function for adding todo', () => {
    const wrapper = mount(<TodosTable {...props}/>)
    wrapper.find('button').simulate('click')
    //expect(props.addTodo).to.have.property('callCount', 1)
    expect(props.addTodo.calledOnce).to.equal(true)
  })

  /*it('has another dummy test', () => {
    expect(1).to.equal(2)
  })//*/
})