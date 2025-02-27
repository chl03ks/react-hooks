import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from '../exercise/01'

test('typing a name shows a greeting', () => {
  render(<App />)
  userEvent.type(screen.getByLabelText(/name/i), 'bob')
  screen.getByText(/hello.*bob/i)
})
