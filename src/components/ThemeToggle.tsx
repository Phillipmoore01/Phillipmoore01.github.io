import { useTheme } from '../theme/useTheme.ts'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      {isDark ? (
        <span className="theme-toggle-icon" aria-hidden="true">
          ☀
        </span>
      ) : (
        <span className="theme-toggle-icon" aria-hidden="true">
          ☽
        </span>
      )}
    </button>
  )
}
