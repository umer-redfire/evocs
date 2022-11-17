import { render } from '@redwoodjs/testing/web'

import ProfileCompaignsPage from './ProfileCompaignsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ProfileCompaignsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProfileCompaignsPage />)
    }).not.toThrow()
  })
})
