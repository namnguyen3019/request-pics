import React from 'react';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import SearchBar from './SearchBar';

class App extends React.Component {
	state = { images: [] };
	handleSubmit = async (term) => {
		const req = await unsplash.get('search/photos', {
			params: {
				query: term,
			},
		});

		this.setState({ images: req.data.results });
	};
	render() {
		return (
			<div className="ui container">
				{' '}
				<SearchBar onSubmit={this.handleSubmit} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;
