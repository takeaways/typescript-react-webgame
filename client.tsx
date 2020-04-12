import * as React from 'react';
import * as ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';

// import GuGuDan from './1GuGuDan';
// import WordRelay from './2WordRelay';
// import BaseBall from './3BaseBall';
// import ResponseCheck from './4ResponseCheck';
import RSP from './5RSP';

const Hot = hot(RSP);
ReactDom.render(<Hot />, document.querySelector('#root'));
