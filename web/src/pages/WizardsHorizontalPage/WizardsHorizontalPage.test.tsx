import { render } from '@redwoodjs/testing/web'

import WizardsHorizontalPage from './WizardsHorizontalPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WizardsHorizontalPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WizardsHorizontalPage />)
    }).not.toThrow()
  })
})
