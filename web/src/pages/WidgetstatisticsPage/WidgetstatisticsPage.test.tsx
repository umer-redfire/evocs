import { render } from '@redwoodjs/testing/web'

import WidgetstatisticsPage from './WidgetstatisticsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WidgetstatisticsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WidgetstatisticsPage />)
    }).not.toThrow()
  })
})
