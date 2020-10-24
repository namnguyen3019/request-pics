import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };

	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state.term);
	};
	onInputChange = (e) => {
		this.setState({ term: e.target.value });
	};
	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="ui form">
				<div className="field">
					<label>Search Term</label>
					<input
						type="text"
						name="search-term"
						value={this.state.term}
						onChange={this.onInputChange}
					/>
				</div>

				<button className="ui button" type="submit">
					Submit
				</button>
			</form>
		);
	}
}

export default SearchBar;
