import { useContext } from 'react'
import classNames from 'classnames'
import { number, oneOf } from 'prop-types'
import RulesContext from './RulesContext'

LikeBtn.propTypes = {
    type: oneOf(['like', 'dislike']).isRequired,
    counter: number,
}
export default function LikeBtn(props) {
    const { id, type } = props

    const { rules, setRules } = useContext(RulesContext)
    const rule = rules.find(rule => rule.id === id)

    function incrementCounter(id, type) {
        if (type === 'like') {
            fetch(`/rest/rules/${id}/likes`, { method: 'POST' })
                .then(response => response.json())
                .then(newRule => {
                    const newRules = rules.map(rule => {
                        if (rule.id === id) return newRule

                        return rule
                    })

                    setRules(newRules)
                })
    
            return
        }
    
        if (type === 'dislike') {
            fetch(`/rest/rules/${id}/dislikes`, { method: 'POST' })
                .then(response => response.json())
                .then(newRule => {
                    const newRules = rules.map(rule => {
                        if (rule.id === id) return newRule

                        return rule
                    })

                    setRules(newRules)
                })
    
            return
        }  
    }

    const isLike = type === 'like'
    const title = isLike ? '+1' : '-1'
    const iconClass = isLike ? 'glyphicon-thumbs-up' : 'glyphicon-thumbs-down'
    const counter = isLike ? rule.likes : rule.dislikes

    return (
        <button className="btn btn-default" title={title} onClick={() => incrementCounter(id, type)}>
            {counter} <i className={classNames('glyphicon', iconClass)} />
        </button>
    )
}