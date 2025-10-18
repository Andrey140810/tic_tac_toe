import { GameLayout } from './GameLayout'
import { store } from '../store'

export function Game() {
	const handleReset = () => {
		store.dispatch({ type: 'RESTART_GAME' })
	}

  return (
    <GameLayout onReset={handleReset} />
  )
}
