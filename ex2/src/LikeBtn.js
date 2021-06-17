import { useState } from 'react'
import { oneOf } from 'prop-types'

LikeBtn.propTypes = {
    type: oneOf(['like', 'dislike'])
}
export default function LikeBtn(props) {
    const { type } = props
    const [counter, setCounter] = useState(0)

    const likeBtnElement = (
        <button className="btn btn-default" title="+1" onClick={() => setCounter(counter + 1)}>
            {counter} <i className="glyphicon glyphicon-thumbs-up" />
        </button>
    )

    const dislikeBtnElement = (
        <button className="btn btn-default" title="-1" onClick={() => setCounter(counter + 1)}>
            {counter} <i className="glyphicon glyphicon-thumbs-down" />
        </button>
    )

    if (type === 'like') return likeBtnElement
    if (type === 'dislike') return dislikeBtnElement

    throw new Error(`Unknown type ${type}`)
}