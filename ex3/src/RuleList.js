import React, { useMemo, useState } from 'react'
import { arrayOf, number, shape, string } from 'prop-types'

import ThemeContext from './ThemeContext'
import Header from './Header'
import Rule from './Rule'

RuleList.propTypes = {
    rules: arrayOf(shape({
        title: string,
        description: string,
        likes: number,
        dislikes: number,
        tags: arrayOf(string),
    })).isRequired,
}
export default function RuleList(props) {
    const elements = props.rules.map(rule => <Rule key={rule.id} rule={rule} />)

    const [theme, updateTheme] = useState('blue')
    const themeContextValue = useMemo(() => {
        return { theme, updateTheme }
    }, [theme, updateTheme])

    return (
        <>
            <ThemeContext.Provider value={themeContextValue}>
                <Header />

                <main>
                    <div>{elements}</div>
                </main>
            </ThemeContext.Provider>
        </>
    )
}