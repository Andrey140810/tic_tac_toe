import { FieldLayout } from "./FieldLayout";
import { store } from '../store'
import { useEffect, useState } from "react";
import { checkWin, checkDraw } from '../utils/gameUtils'

export function Field() {
	const [localState, setLocalState] = useState(store.getState())

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setLocalState(store.getState())
		})

		return unsubscribe
	}, [])

	const handleCellClick = (index) => {
		const currentState = store.getState()

		if(currentState.isGameEnded || currentState.field[index] !== '')
			return
		const newField = [...currentState.field]
		newField[index] = currentState.currentPlayer

		store.dispatch({ type: 'SET_FIELD', payload: newField })

		const stateAfterFieldUpdate = store.getState()

		if (checkWin(stateAfterFieldUpdate.field)) {
			store.dispatch({ type: 'SET_GAME_ENDED' })
			return
		} else if (checkDraw(stateAfterFieldUpdate.field)) {
			store.dispatch({ type: 'SET_DRAW' })
			return
		} else {
			const nextPlayer = stateAfterFieldUpdate.currentPlayer === 'X' ? '0' : 'X'
			store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: nextPlayer })
		}

	}

	return (
		<FieldLayout onClick={handleCellClick} field={localState.field} />
	)
}
