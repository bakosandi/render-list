function Card(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.details}</p>
    </div>
  );
}

export default Card;
