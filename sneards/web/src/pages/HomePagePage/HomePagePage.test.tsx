import { render } from '@redwoodjs/testing/web'

import HomePagePage from './HomePagePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HomePagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomePagePage />)
    }).not.toThrow()
  })
})
