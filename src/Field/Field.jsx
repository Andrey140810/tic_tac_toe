import { FieldLayout } from "./FieldLayout";
import { checkWin, checkDraw } from '../utils/gameUtils'
import { useDispatch, useSelector } from 'react-redux'
import { setCarrentPlayer, setDraw, setField, setGameEnded } from '../actions'

export function Field() {
	const dispatch = useDispatch()
	const isGameEnded = useSelector(state => state.isGameEnded)
	const currentPlayer = useSelector(state => state.currentPlayer)
	const field = useSelector(state => state.field)

	const handleCellClick = (index) => {
		if(isGameEnded || field[index] !== '')
			return
		const newField = [...field]
		newField[index] = currentPlayer

		dispatch(setField(newField))

		if (checkWin(newField)) {
			dispatch(setGameEnded())
			return
		} else if (checkDraw(newField)) {
			dispatch(setDraw())
			return
		} else {
			const nextPlayer = currentPlayer === 'X' ? '0' : 'X'
			dispatch(setCarrentPlayer(nextPlayer))
		}

	}

	return (
		<FieldLayout onClick={handleCellClick} field={field} />
	)
}
