import { useContext, useEffect, useState } from 'react'
import classNames from 'classnames'
import { arrayOf, number, shape, string } from 'prop-types'
 
import LikeBtn from './LikeBtn'

import './Rule.css'
import ThemeContext from './ThemeContext'

Rule.propTypes = {
  rule: shape({
    title: string,
    description: string,
    likes: number,
    dislikes: number,
    tags: arrayOf(string),
  }).isRequired,
}
export default function Rule(props) {
  const { rule } = props;
  const [folded, setFolded] = useState(false)
  const { theme } = useContext(ThemeContext)
  const isBlue = theme === 'blue'

  // Fold rule if there is no description
  useEffect(() => {
    setFolded(!Boolean(rule.description))
  }, [rule.description])

  const tags = rule.tags.map(tag => <span key={tag} className="badge">{tag}</span>);
 
  return (
    <div className={classNames('panel rule', { 'panel-primary': isBlue, 'panel-dark': !isBlue })}>
      <div className="panel-heading" role="presentation" onClick={() => setFolded(!folded)}>
        {rule.title}<i className={classNames('pull-right glyphicon', { 'glyphicon-chevron-up': folded, 'glyphicon-chevron-down': !folded } )} />
      </div>
      <div className={classNames('panel-body', { hidden: folded })}><p>{rule.description}</p></div>
      <div className="panel-footer">
        <div className="btn-toolbar">
          {tags}
          <div className="btn-group btn-group-xs pull-right">
            <button className="btn btn-primary" title="Update">
              <i className="glyphicon glyphicon-pencil" />
            </button>
          </div>
          <div className="btn-group btn-group-xs pull-right">
            <LikeBtn type="like" counter={rule.likes} />
            <LikeBtn type="dislike" counter={rule.dislikes} />
          </div>
        </div>
      </div>
    </div>
  );
}
 