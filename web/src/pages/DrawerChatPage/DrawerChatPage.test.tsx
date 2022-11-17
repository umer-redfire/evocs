import { render } from '@redwoodjs/testing/web'

import DrawerChatPage from './DrawerChatPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DrawerChatPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DrawerChatPage />)
    }).not.toThrow()
  })
})
