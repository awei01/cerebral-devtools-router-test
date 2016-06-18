import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Decorator as Cerebral, Container, Link } from 'cerebral-view-react';
import controller from './controller';

@Cerebral({})
class App extends Component {
	render() {
		return (
			<div>
				<ul>
					<li><Link signal="home.homeOpened" params={{ foo: "foo-value" }}>signal with query</Link></li>
					<li><Link signal="home.urlParamsOpened" params={{ key: "some-key" }}>signal with params</Link></li>
				</ul>
				<h1>Issue with remembered signal input and having router set URL route</h1>
				<h2>It works when:</h2>
				<ol>
					<li>Open up the cerebral chrome extension</li>
					<li>ensure "reset on refresh" is checked ON</li>
					<li>click on either of the links above</li>
					<li>note the url changes and attaches the params or querystring properly</li>
					<li>refresh the browser and note that the URL maintains the params or querytring</li>
				</ol>
				<h2>Now, break it:</h2>
				<ol>
					<li>Refresh one more time to clear out the stored signals</li>
					<li>check the "reset on refresh" so it is is OFF</li>
					<li>click on either link above</li>
					<li>refresh the browser and watch the console warnings or exception</li>
					<li>ALSO, note that the URL is not synced with the signal</li>
				</ol>
			</div>
		)
	}
}

ReactDOM.render(
	(
		<Container controller={ controller }>
			<App/>
		</Container>
	),
	document.getElementById('root')
);
