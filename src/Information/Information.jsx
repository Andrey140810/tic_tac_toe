import { Component } from 'react';
import { InformationLayout } from './InformationLayout';
import { connect } from 'react-redux';

class InformationContainer extends Component {
	render() {
		let statusText = '';

		if (this.props.isDraw) {
			statusText = 'Ничья';
		} else if (this.props.isGameEnded) {
			statusText = `Победа: ${this.props.currentPlayer}`;
		} else {
			statusText = `Ходит: ${this.props.currentPlayer}`;
		}
		return <InformationLayout statusText={statusText} />;
	}
}

const mapStateToProps = (state) => ({
	isDraw: state.isDraw,
	isGameEnded: state.isGameEnded,
	currentPlayer: state.currentPlayer,
});

export const Information = connect(mapStateToProps, null)(InformationContainer);
