import { render } from '@redwoodjs/testing/web'

import Error404Page from './Error404Page'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('Error404Page', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Error404Page />)
    }).not.toThrow()
  })
})
