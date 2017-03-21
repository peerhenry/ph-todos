import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'

import App from './App'

describe('<App/>', () => {
  it('Renders a div and an h1', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find('div')).to.have.length(1)
    expect(wrapper.find('h1')).to.have.length(1)
  })
})