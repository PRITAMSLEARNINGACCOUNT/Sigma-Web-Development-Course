function Main(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src="..." alt="Card image" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href="#" className="btn btn-primary">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default Main;
