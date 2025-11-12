import { FieldLayout } from './FieldLayout';
import { checkWin, checkDraw } from '../utils/gameUtils';
import { connect } from 'react-redux';
import { setCarrentPlayer, setDraw, setField, setGameEnded } from '../actions';
import { Component } from 'react';
class FieldContainer extends Component {
	handleCellClick = (index) => {
		if (this.props.isGameEnded || this.props.field[index] !== '') return;
		const newField = [...this.props.field];
		newField[index] = this.props.currentPlayer;

		this.props.setField(newField);

		if (checkWin(newField)) {
			this.props.setGameEnded();
			return;
		} else if (checkDraw(newField)) {
			this.props.setDraw();
			return;
		} else {
			const nextPlayer = this.props.currentPlayer === 'X' ? '0' : 'X';
			this.props.setCarrentPlayer(nextPlayer);
		}
	};

	render() {
		return (
			<FieldLayout
				onClick={this.handleCellClick}
				field={this.props.field}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	isGameEnded: state.isGameEnded,
	currentPlayer: state.currentPlayer,
	field: state.field,
});

const mapDispatchToProps = (dispatch) => ({
	setField: (field) => dispatch(setField(field)),
	setGameEnded: () => dispatch(setGameEnded()),
	setDraw: () => dispatch(setDraw()),
	setCarrentPlayer: (currentPlayer) =>
		dispatch(setCarrentPlayer(currentPlayer)),
});

export const Field = connect(
	mapStateToProps,
	mapDispatchToProps,
)(FieldContainer);
