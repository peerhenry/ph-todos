import { expect } from 'chai'
import TodosReducer from './TodosReducer'

describe('TodosReducer', () => {
  
  it('Action from any type returns default state', () => {
    var result = TodosReducer({dummy: 'billy'}, {type: 'whatever'})

    // assert
    expect(result.dummy).to.equal('billy')
  })

})