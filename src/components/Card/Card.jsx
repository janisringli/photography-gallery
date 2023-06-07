import "./Card.css";

function Card(props) {
    
  return (
    <div className="card-container">
      <div className="image-header"></div>
      <div className="card-content">
        <div className="card-title">{props.title}</div>
        <ul className="features-list">
          <li className="feature-item"></li>
          <li className="feature-item"></li>
          <li className="feature-item"></li>
          <li className="feature-item"></li>
        </ul>
      </div>
    </div>
  );
}
export default Card;
