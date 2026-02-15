import React from 'react'
import { useTheme } from '../contexts/ThemeContexts'

function ThemeToggleButton() {

    const {theme,toggleTheme} = useTheme()
  return (
    <button onClick={toggleTheme} className='p-1 rounded-md bg-zinc-700 dark:bg-zinc-300 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-color'>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}

export default ThemeToggleButton
