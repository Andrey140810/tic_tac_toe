import { Field } from "../Field/Field";
import { Information } from "../Information/Information";
import styles from './Game.module.css'
import PropTypes from 'prop-types';

export function GameLayout({ isDraw, currentPlayer, isGameEnded, field, onCellClick, onReset }) {
	return (
		<>
			<Information isDraw={isDraw} currentPlayer={currentPlayer} isGameEnded={isGameEnded} />
			<Field onClick={onCellClick} field={field} />
			<button onClick={onReset} className={styles['game-button']}>Начать заново</button>
		</>
	)
}

GameLayout.propTypes = {
	isDraw: PropTypes.bool,
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	field: PropTypes.array,
	onCellClick: PropTypes.func,
	onReset: PropTypes.func
}
