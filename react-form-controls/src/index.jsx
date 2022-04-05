import React from 'react';
import ReactDOM from 'react-dom';
import NewsletterForm from './newsletter-form';

const form = <NewsletterForm />;
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(form);
