import { render } from '@redwoodjs/testing/web'

import AccountoverviewPage from './AccountoverviewPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AccountoverviewPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AccountoverviewPage />)
    }).not.toThrow()
  })
})
