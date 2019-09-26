import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '@testing-library/react'
import Navigation from '../components/Navigation/index'

test('Navigation Bar renders siteTitle', () => {
  const { getByText, container } = render(
    <Navigation siteTitle="Testing Navigation" />
  )
  expect(getByText(/testing navigation/i))
})
