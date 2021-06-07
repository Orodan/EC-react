import React from 'react'
import { arrayOf, number, shape, string } from 'prop-types'

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

    return (
        <div>{elements}</div>
    )
}