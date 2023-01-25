import React from 'react';
import ReactDOM from 'react-dom';
// import { ToastProvider } from 'react-toast-notification';
import { toast } from 'react-toast-notification';
import './styles/index.css';
import { App } from './components';

ReactDOM.render(
  
  <React.StrictMode>
    {/* // ToastProvider will be using the context APi so we wrap it arroud App */}
    {/* Context API is nothing but pop up messages used by Toast provider */}
      <App />

  </React.StrictMode>,
  document.getElementById('root')
);


