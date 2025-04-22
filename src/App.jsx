import { useEffect, useState } from 'react'
import './App.css'
import	getHistory from './api.js';

function App() {
  const [cards, setCards] = useState(undefined);

  useEffect(() => {
	let res = getHistory();
	res.then((data) => {
		setCards(data);
		console.log(data);
	});
  },[])

  return (
	<div className="App">
		{!cards && <div className="loader"></div>}
	</div>
  )
}

export default App
