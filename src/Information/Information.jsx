import { InformationLayout } from "./InformationLayout";
import { useSelector } from 'react-redux'

export function Information() {
	const isDraw = useSelector(state => state.isDraw)
	const isGameEnded = useSelector(state => state.isGameEnded)
	const currentPlayer = useSelector(state => state.currentPlayer)

	let statusText = ''

	if (isDraw) {
		statusText = 'Ничья'
	} else if (isGameEnded) {
		statusText = `Победа: ${currentPlayer}`
	} else {
		statusText = `Ходит: ${currentPlayer}`
	}
	return (
		<InformationLayout statusText={statusText} />
	)
}
