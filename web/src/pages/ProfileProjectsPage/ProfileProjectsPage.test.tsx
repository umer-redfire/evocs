import { render } from '@redwoodjs/testing/web'

import ProfileProjectsPage from './ProfileProjectsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ProfileProjectsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProfileProjectsPage />)
    }).not.toThrow()
  })
})
