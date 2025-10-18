export const checkWin = (field) => {
	const WIN_PATTERNS = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8],
		[0, 3, 6], [1, 4, 7], [2, 5, 8],
		[0, 4, 8], [2, 4, 6]
	];

	const isWin = WIN_PATTERNS.some(([a, b, c]) => {
		return field[a] === field[b] && field[b] === field[c] && field[a] !== ''
	})

	return isWin
}

export const checkDraw = (field) => {
	const isFieldFull = field.every(cell => cell !== '')
	return isFieldFull
}
