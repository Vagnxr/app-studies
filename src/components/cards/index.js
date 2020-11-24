import "./index.css";

const Cards = (props) => {
  return (
    <div className="container">
      <div className="small">
        <img src="https://miro.medium.com/max/1838/1*1JB6n8WhVZFOO3y6pjeI7Q.png" />
      </div>

      <hr />

      <div className="large">
        <p className="title">{props.title}</p>
        <p className="describe">{props.describe}</p>
      </div>
    </div>
  );
};

export default Cards;