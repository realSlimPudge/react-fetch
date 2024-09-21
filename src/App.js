import './App.css'
import { useState, useEffect } from 'react'
import Card from './components/Card.jsx'

function App() {
	const [data, setData] = useState([])
	const [move, setMove] = useState(false)
	const [grid, setGrid] = useState(false)
	const [opacity, setOpacity] = useState(false)

	function getData() {
		const url = 'https://jsonplaceholder.typicode.com/users'
		fetch(url)
			.then(response => {
				return response.json()
			})
			.then(e => {
				setData(e)
			})
			.catch(error => {
				console.error('Error: ', error)
			})
	}

	function getGrid() {
		setMove(!move)
		setGrid(!grid)
	}
	function show() {
		setTimeout(() => {
			setOpacity(!opacity)
		}, 100)
	}

	return (
		<div className='App'>
			<div className={`getButton ${move ? 'top' : 'bot'}`}>
				<button
					onClick={() => {
						getData()
						getGrid()
						show()
					}}
				>
					Получить данные
				</button>
			</div>
			{grid && (
				<div className={`grid ${opacity && 'show'}`}>
					{data.map(e => (
						<Card key={e.id} data={e}></Card>
					))}
				</div>
			)}
		</div>
	)
}

export default App
