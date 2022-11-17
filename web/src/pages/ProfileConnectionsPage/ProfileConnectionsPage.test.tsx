import { render } from '@redwoodjs/testing/web'

import ProfileConnectionsPage from './ProfileConnectionsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ProfileConnectionsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProfileConnectionsPage />)
    }).not.toThrow()
  })
})
