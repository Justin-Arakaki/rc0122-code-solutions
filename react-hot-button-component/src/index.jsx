import React from 'react';
import ReactDOM from 'react-dom';
import HotButton from './hot-button';

const hotButton = <HotButton />;
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(hotButton);
