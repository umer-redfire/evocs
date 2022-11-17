import { render } from '@redwoodjs/testing/web'

import MasterLayout from './MasterLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MasterLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MasterLayout />)
    }).not.toThrow()
  })
})
