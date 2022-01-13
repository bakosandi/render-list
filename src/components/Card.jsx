function Card(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.detail}</p>
    </div>
  );
}

export default Card;
