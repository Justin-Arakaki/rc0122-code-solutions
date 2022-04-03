import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

const hello = React.createElement('h1', null, 'Hello, React!');
ReactDOM.render(hello, root);
