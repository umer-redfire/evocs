import { render } from '@redwoodjs/testing/web'

import MenuTestPage from './MenuTestPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MenuTestPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MenuTestPage />)
    }).not.toThrow()
  })
})
