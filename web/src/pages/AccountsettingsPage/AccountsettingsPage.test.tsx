import { render } from '@redwoodjs/testing/web'

import AccountsettingsPage from './AccountsettingsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AccountsettingsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AccountsettingsPage />)
    }).not.toThrow()
  })
})
