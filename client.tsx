import * as React from 'react';
import * as ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';

import GuGuDan from './GuGuDan';
import WordRelay from './WordRelay';

const Hot = hot(WordRelay);
ReactDom.render(<Hot />, document.querySelector('#root'));
