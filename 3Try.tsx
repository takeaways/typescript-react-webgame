import * as React from 'react';
import { FunctionComponent } from 'react';

import { TryInfo } from './3BaseBall';

const Try: FunctionComponent<{ tryInfo: string }> = ({ tryInfo }) => {
	return <li>{tryInfo}</li>;
};

export default Try;
