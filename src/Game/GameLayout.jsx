import { Field } from "../Field/Field";
import { Information } from "../Information/Information";
import styles from './Game.module.css'
import PropTypes from 'prop-types';

export function GameLayout({ onReset }) {
	return (
		<>
			<Information />
			<Field />
			<button onClick={onReset} className={styles['game-button']}>Начать заново</button>
		</>
	)
}

GameLayout.propTypes = {
	onReset: PropTypes.func.isRequired
}
