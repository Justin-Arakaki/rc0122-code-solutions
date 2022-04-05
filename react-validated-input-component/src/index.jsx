import React from 'react';
import ReactDOM from 'react-dom';
import ValidatedInput from './validated-input';

const weirdForm = <ValidatedInput />;
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(weirdForm);
