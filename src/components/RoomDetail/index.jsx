import './style.css';
import { ReservationForm } from './ReservationForm';
export const RoomDetail = ({ roomDetail }) => {
  console.log(roomDetail);

  return (
    <section className="light">
      <div className="container2">
        <h2>{roomDetail.type}</h2>
        <div className="columns-2">
          <div className="column">
            <img src={`img/pokoje/pokoj0${roomDetail.id + 1}.jpg`} />
            <p>{roomDetail.description}</p>
          </div>
          <ReservationForm price={roomDetail.price} />
        </div>
      </div>
    </section>
  );
};
