import { SET_CURRENT_PLAYER, SET_FIELD, SET_DRAW, SET_GAME_ENDED, RESTART_GAME } from './actions'

const initialState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	field: [
		'', '', '',
		'', '', '',
		'', '', '',
	]
}

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_CURRENT_PLAYER:
			return {
				...state,
				currentPlayer: payload
			}
		case SET_FIELD:
			return {
				...state,
				field: payload
			}
		case SET_GAME_ENDED:
			return {
				...state,
				isGameEnded: true,
				isDraw: false
			}
		case SET_DRAW:
			return {
				...state,
				isGameEnded: true,
				isDraw: true
			}
		case RESTART_GAME:
			return initialState
		default:
			return state
	}
}
