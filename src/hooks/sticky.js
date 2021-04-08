import { useState, useEffect } from 'react'

const useStickyState = (key, defaultValue) => {
	const [value, setValue] = useState(defaultValue)

	useEffect(() => {
		const stickyValue = window.localStorage.getItem(key)

		setValue(stickyValue !== null ? JSON.parse(stickyValue) : defaultValue)
	}, [])

	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(value))
	}, [key, value])

	return [value, setValue]
}

export default useStickyState
