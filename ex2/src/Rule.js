import { useState } from 'react'
import classNames from 'classnames'
import { shape, string, number, arrayOf } from 'prop-types'

import LikeBtn from './LikeBtn'
 
import './Rule.css'

Rule.propTypes = {
  rule: shape({
    title: string,
    description: string,
    likes: number,
    dislikes: number,
    tags: arrayOf(string),
  })
}
export default function Rule(props) {
  const { rule } = props;
  const hasDescription = Boolean(rule.description)
  const [folded, setFolded] = useState(!hasDescription)

  const tags = rule.tags.map(tag => <span key={tag} className="badge">{tag}</span>);
 
  return (
    <div className="panel panel-primary rule">
      <div className="panel-heading" role="presentation" onClick={() => setFolded(!folded)}>
        {rule.title}
        <i className={`pull-right glyphicon ${folded ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down'}`} />
      </div>
      <div className={classNames('panel-body', { 'hidden': folded })}><p>{rule.description}</p></div>
      <div className="panel-footer">
        <div className="btn-toolbar">
          {tags}
          <div className="btn-group btn-group-xs pull-right">
            <button className="btn btn-primary" title="Update">
              <i className="glyphicon glyphicon-pencil" />
            </button>
          </div>
          <div className="btn-group btn-group-xs pull-right">
            <LikeBtn type="like" />
            <LikeBtn type="dislike" />
          </div>
        </div>
      </div>
    </div>
  );
}
 