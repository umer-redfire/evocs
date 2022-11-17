import { render } from '@redwoodjs/testing/web'

import WidgetschartsPage from './WidgetschartsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WidgetschartsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WidgetschartsPage />)
    }).not.toThrow()
  })
})
