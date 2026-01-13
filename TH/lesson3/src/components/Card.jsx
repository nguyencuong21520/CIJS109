import "./card.css"

const Card = (props) => {
  const {name, classInfo, description} = props;
  return (
    <div className="card">
      <h2 className="card-title">Tôi là: {name}</h2>
      <p className="card-class">Học lớp: {classInfo}</p>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
