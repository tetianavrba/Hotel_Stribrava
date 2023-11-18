import './style.css';
export const Room = ({ room, onRoomChoice }) => {
  const handleClick = () => {
    onRoomChoice(room);
  };
  const { id, type, price, currency, unit } = room;
  console.log('Room', room);
  return (
    <div className="card" onClick={handleClick}>
      <img className="card__image" src={`img/pokoje/pokoj0${id + 1}.jpg`} />
      <div className="card__title">{type}</div>
      <div className="card__body">
        {price}
        {currency} {unit}
      </div>
    </div>
  );
};
