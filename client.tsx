import * as React from 'react';
import * as ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';

import GuGuDan from './1GuGuDan';
import WordRelay from './2WordRelay';
import BaseBall from "./3BaseBall";

const Hot = hot(BaseBall);
ReactDom.render(<Hot />, document.querySelector('#root'));
