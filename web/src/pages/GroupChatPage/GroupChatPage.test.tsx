import { render } from '@redwoodjs/testing/web'

import GroupChatPage from './GroupChatPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('GroupChatPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupChatPage />)
    }).not.toThrow()
  })
})
