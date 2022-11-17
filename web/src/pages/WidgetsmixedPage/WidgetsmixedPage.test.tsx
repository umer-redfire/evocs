import { render } from '@redwoodjs/testing/web'

import WidgetsmixedPage from './WidgetsmixedPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WidgetsmixedPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WidgetsmixedPage />)
    }).not.toThrow()
  })
})
