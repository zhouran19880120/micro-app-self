import React from 'react';
import { render } from 'react-dom';

import DevToolsPage from '@/pages/devtools/devOpen';

render(<DevToolsPage />, window.document.querySelector('#app'));

if (module.hot) { module.hot.accept(); }
