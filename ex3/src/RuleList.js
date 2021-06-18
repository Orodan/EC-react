import React, { useEffect } from 'react'
import { arrayOf, shape, string, number } from 'prop-types'

import Rule from './Rule'

RuleList.propTypes = {
    rules: arrayOf(shape({
        title: string,
        description: string,
        likes: number,
        dislikes: number,
        tags: arrayOf(string),
    }))
}
export default function RuleList(props) {
    const { rules } = props
    
    useEffect(() => {
        document.title = `${rules.length} rules` 
    }, [rules])

    const elements = rules.map(rule => <Rule key={rule.id} rule={rule} />)

    return (
        <div>{elements}</div>
    )
}