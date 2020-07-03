/**
 * Replace with custom runner when needed.
 * @module index
 */

import ReactGA from 'react-ga';
import start from '@plone/volto/start-server';

const reloadServer = start();

if (module.hot) {
  reloadServer();
}
ReactGA.initialize('UA-171579968-1');
