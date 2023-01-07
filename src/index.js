import * as React from 'react';
import reactDom from 'react-dom/client';
import App from './app/app';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = reactDom.createRoot(document.getElementById('root'));
root.render(<App/>);