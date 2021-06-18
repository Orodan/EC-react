import { useState } from 'react'
import { oneOf } from 'prop-types'

LikeBtn.propTypes = {
    type: oneOf(['like', 'dislike'])
}
export default function LikeBtn(props) {
    const { id, type, initialCounter } = props
    const [counter, setCounter] = useState(initialCounter)

    function incrementCounter(id, type) {
        if (type === 'like') {
            fetch(`http://localhost:4000/rest/rules/${id}/likes`, { method: 'POST' })
                .then(() => setCounter(counter + 1))
        }

        if (type === 'dislike') {
            fetch(`http://localhost:4000/rest/rules/${id}/dislikes`, { method: 'POST' })
                .then(() => setCounter(counter + 1))
        }
    }

    const likeBtnElement = (
        <button className="btn btn-default" title="+1" onClick={() => incrementCounter(id, type)}>
            {counter} <i className="glyphicon glyphicon-thumbs-up" />
        </button>
    )

    const dislikeBtnElement = (
        <button className="btn btn-default" title="-1" onClick={() => incrementCounter(id, type)}>
            {counter} <i className="glyphicon glyphicon-thumbs-down" />
        </button>
    )

    if (type === 'like') return likeBtnElement
    if (type === 'dislike') return dislikeBtnElement

    throw new Error(`Unknown type ${type}`)
}