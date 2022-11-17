import { render } from '@redwoodjs/testing/web'

import WidgettablesPage from './WidgettablesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WidgettablesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WidgettablesPage />)
    }).not.toThrow()
  })
})
