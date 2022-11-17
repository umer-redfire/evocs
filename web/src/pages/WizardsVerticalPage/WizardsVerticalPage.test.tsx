import { render } from '@redwoodjs/testing/web'

import WizardsVerticalPage from './WizardsVerticalPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WizardsVerticalPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WizardsVerticalPage />)
    }).not.toThrow()
  })
})
