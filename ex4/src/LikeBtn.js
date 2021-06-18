import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { number, oneOf } from 'prop-types'

LikeBtn.propTypes = {
    type: oneOf(['like', 'dislike']).isRequired,
    counter: number,
}
export default function LikeBtn(props) {
    const { type } = props
    const [counter, setCounter] = useState(0)
    // Allow to specify counter value from props
    useEffect(() => {
        setCounter(props.counter || 0)
    }, [props.counter])

    const isLike = type === 'like'
    const title = isLike ? '+1' : '-1'
    const iconClass = isLike ? 'glyphicon-thumbs-up' : 'glyphicon-thumbs-down'

    return (
        <button className="btn btn-default" title={title} onClick={() => setCounter(counter + 1)}>
            {counter} <i className={classNames('glyphicon', iconClass)} />
        </button>
    )
}