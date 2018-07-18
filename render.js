import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/App';

const result = ReactDOMServer.renderToStaticMarkup(<App />);

export default result;