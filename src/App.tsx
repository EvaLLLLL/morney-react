import React from 'react';
import {
	HashRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Money from './Views/Money';
import Statistics from './Views/Statistics';
import {Tags} from './Views/Tags';
import NoMatch from './Views/NoMatch';
import styled from 'styled-components';
import {TagEdit} from './Views/TagEdit';

const AppWrapper = styled.div`
	background: #f5f5f5
`;

function App() {
	return (
		<AppWrapper>
			<Router>
				<Switch>
					<Route exact path="/tags">
						<Tags/>
					</Route>
					<Route exact path="/tags/:id">
						<TagEdit/>
					</Route>
					<Route exact path="/money">
						<Money/>
					</Route>
					<Route exact path="/statistics">
						<Statistics/>
					</Route>
					<Redirect exact from="/" to="/money"/>
					<Route path="*">
						<NoMatch/>
					</Route>
				</Switch>
			</Router>
		</AppWrapper>
	);
}

export default App;