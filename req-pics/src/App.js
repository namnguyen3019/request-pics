import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
	handleSubmit(term) {
		console.log(term);
	}
	render() {
		return (
			<div className="ui container">
				{' '}
				<SearchBar onSubmit={this.handleSubmit} />
				<h1> This is antoher div</h1>
			</div>
		);
	}
}

export default App;
