import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App.tsx'
import { ThemeProvider } from './theme/ThemeProvider.tsx'

describe('App', () => {
  it('renders the main heading', () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>,
    )
    expect(screen.getByRole('heading', { level: 1, name: /phillip moore/i })).toBeInTheDocument()
  })
})
