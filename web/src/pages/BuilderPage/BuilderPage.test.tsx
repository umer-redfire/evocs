import { render } from '@redwoodjs/testing/web'

import BuilderPage from './BuilderPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BuilderPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BuilderPage />)
    }).not.toThrow()
  })
})
