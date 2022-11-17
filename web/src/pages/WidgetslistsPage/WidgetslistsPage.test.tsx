import { render } from '@redwoodjs/testing/web'

import WidgetslistsPage from './WidgetslistsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WidgetslistsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WidgetslistsPage />)
    }).not.toThrow()
  })
})
