import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'

import { App } from './App';

createServer({
  models: {
    transactions: Model
  },

  routes(){
    this.namespace = "api"

    this.get('/transactions', () => {
      return this.schema.all('transactions');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transactions', data);
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
