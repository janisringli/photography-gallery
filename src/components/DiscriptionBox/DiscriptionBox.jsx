import "./DiscriptionBox.css";

function DiscriptionBox(props) {
  return (
    <div className="description-container">
      <div className="description-title">
        Descri <p>ption</p>
      </div>
      <div className="description-text">
       {props.content}
      </div>
    </div>
  );
}
export default DiscriptionBox;
