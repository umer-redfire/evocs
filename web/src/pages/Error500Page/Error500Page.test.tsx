import { render } from '@redwoodjs/testing/web'

import Error500Page from './Error500Page'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('Error500Page', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Error500Page />)
    }).not.toThrow()
  })
})
