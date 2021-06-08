import { createContext } from 'react'

const ThemeContext = createContext({ theme: undefined, updateTheme: () => {} })

export default ThemeContext