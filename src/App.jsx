import { useEffect, useState } from 'react'
import './App.css'
import	getHistory from './api.js';
import Cards from './Cards.jsx';

function App() {
  const [cards, setCards] = useState(undefined);

  useEffect(() => {
	let res = getHistory();
	res.then((data) => {
		setTimeout(() => setCards(data),1000);
	});
  },[])

  return (
	<div className="App">
		{!cards && <div className="loader"></div>}
		{cards && <Cards cards={cards} />}
	</div>
  )
}

export default App
