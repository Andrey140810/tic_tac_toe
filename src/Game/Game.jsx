import { GameLayout } from './GameLayout'
import { useDispatch } from 'react-redux'
import { restartGame } from '../actions'

export function Game() {
	const dispatch = useDispatch()

	const handleReset = () => {
		dispatch(restartGame())
	}

  return (
    <GameLayout onReset={handleReset} />
  )
}
