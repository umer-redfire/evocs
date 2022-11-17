import { render } from '@redwoodjs/testing/web'

import PrivateChatPage from './PrivateChatPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PrivateChatPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PrivateChatPage />)
    }).not.toThrow()
  })
})
