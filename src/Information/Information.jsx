import { InformationLayout } from "./InformationLayout";
import { store } from '../store'
import { useState, useEffect } from "react";

export function Information() {
	const [localState, setLocalState] = useState(store.getState())

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setLocalState(store.getState())
		})

		return unsubscribe
	}, [])

	let statusText = ''

	if (localState.isDraw) {
		statusText = 'Ничья'
	} else if (localState.isGameEnded) {
		statusText = `Победа: ${localState.currentPlayer}`
	} else {
		statusText = `Ходит: ${localState.currentPlayer}`
	}
	return (
		<InformationLayout statusText={statusText} />
	)
}
