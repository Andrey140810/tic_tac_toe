import { InformationLayout } from "./InformationLayout";
import PropTypes from 'prop-types';

export function Information({ isDraw, currentPlayer, isGameEnded }) {
	return (
		<InformationLayout isDraw={isDraw} currentPlayer={currentPlayer} isGameEnded={isGameEnded} />
	)
}

Information.propTypes = {
	isDraw: PropTypes.bool,
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool
}
