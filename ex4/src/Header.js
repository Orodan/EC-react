import { useContext } from 'react'
import classNames from 'classnames'

import ThemeContext from './ThemeContext'

import './Header.css'

export default function Header() {
    const { theme, updateTheme } = useContext(ThemeContext)
    const isBlue = theme === 'blue'

    return (
        <header className={classNames('header', { 'bg-primary': isBlue, 'bg-dark': !isBlue})}>
            <button type="button" className="btn btn-default" onClick={() => updateTheme(isBlue ? 'dark' : 'blue')}>{isBlue ? 'Dark theme' : 'Blue theme'}</button>
        </header>
    )
}