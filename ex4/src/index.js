import React from 'react';
import ReactDOM from 'react-dom';

import RuleList from './RuleList'
import rules from './data.json'

import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <RuleList rules={rules} />
  </React.StrictMode>,
  document.getElementById('root')
);

