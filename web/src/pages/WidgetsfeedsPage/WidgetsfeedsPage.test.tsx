import { render } from '@redwoodjs/testing/web'

import WidgetsfeedsPage from './WidgetsfeedsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WidgetsfeedsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WidgetsfeedsPage />)
    }).not.toThrow()
  })
})
