import { useState } from 'react'
import './Game.module.css'
import { GameLayout } from './GameLayout'

export function Game() {
	const [currentPlayer, setCurrentPlayer] = useState('X')
	const [isGameEnded, setIsGameEnded] = useState(false)
	const [isDraw, setIsDraw] = useState(false)
	const [field, setField] = useState([
		'', '', '',
		'', '', '',
		'', '', '',
	])

	function handleCellClick(index) {
		if (isGameEnded || field[index] !== '')
			return
		const newField = [...field]
		newField[index] = currentPlayer
		const WIN_PATTERNS = [
			[0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
			[0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
			[0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
		];
		const isWin = WIN_PATTERNS.some(([a, b, c]) => {
			return newField[a] === newField[b] && newField[b] === newField[c] && newField[a] !== ''
		})
		const isFieldFull = newField.every(cell => cell !== '')
		if (isWin) {
			setIsGameEnded(true)
		} else if (isFieldFull) {
			setIsDraw(true)
		} else {
			setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X')
		}
		setField(newField)
	}

	function handleReset() {
		setCurrentPlayer('X')
		setIsGameEnded(false)
		setIsDraw(false)
		setField([
			'', '', '',
			'', '', '',
			'', '', '',
		])
	}

  return (
    <GameLayout onReset={handleReset} onCellClick={handleCellClick} currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw} field={field} />
  )
}
