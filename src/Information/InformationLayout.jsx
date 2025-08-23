import styles from './Information.module.css'
import PropTypes from 'prop-types';

export function InformationLayout({ isDraw, isGameEnded, currentPlayer}) {
	const labelInformation = (text) => {
		return <label className={styles['information-label']}>{text}</label>
	}

	return (
			isDraw ? labelInformation('Ничья') :
			!isDraw && isGameEnded ? labelInformation(`Победа: ${currentPlayer}`) :
			!isDraw && !isGameEnded ? labelInformation(`Ходит: ${currentPlayer}`) : null
	)
}

InformationLayout.propTypes = {
	isDraw: PropTypes.bool,
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool
}
