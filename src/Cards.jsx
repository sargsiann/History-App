function	Card({ title, description, imageUrl }) {
  return (
	<div className="card">
	  <h2>{title}</h2>
	  <p>{description}</p>
	</div>
  );
}

function Cards({ cards }) {
  return (
	<div className="cards">
	  {cards.map((card, index) => (
		<Card
		  key={card.id}
		  title={card.title}
		  description={card.details}
		/>
	  ))}
	</div>
  );
}

export default Cards;