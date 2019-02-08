const { expect } = require('chai')

describe('Main', () => {
  let arr

  beforeEach(() => {
    arr = [1, 2, 3]
  })

  it('should be an array', () => {
    expect(arr).to.be.an('array')
  })
})