 import './Rule.css'

 export default function Rule(props) {
   const { rule } = props;
   const tags = rule.tags.map(tag => <span key={tag} className="badge">{tag}</span>);
 
   return (
     <div className="panel panel-primary rule">
       <div className="panel-heading" role="presentation">
         {rule.title}<i className="pull-right glyphicon glyphicon-chevron-down" />
       </div>
       <div className="panel-body"><p>{rule.description}</p></div>
       <div className="panel-footer">
         <div className="btn-toolbar">
           {tags}
           <div className="btn-group btn-group-xs pull-right">
             <button className="btn btn-primary" title="Update">
               <i className="glyphicon glyphicon-pencil" />
             </button>
           </div>
           <div className="btn-group btn-group-xs pull-right">
             <button className="btn btn-default" title="+1">
               {rule.likes} <i className="glyphicon glyphicon-thumbs-up" />
             </button>
             <button className="btn btn-default" title="-1">
               {rule.dislikes} <i className="glyphicon glyphicon-thumbs-down" />
             </button>
           </div>
         </div>
       </div>
     </div>
   );
 }
 