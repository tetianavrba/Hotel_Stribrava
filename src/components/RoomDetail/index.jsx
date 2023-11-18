import './style.css';
import { ReservationForm } from './ReservationForm';
export const RoomDetail = ({ roomDetail }) => {
  console.log(roomDetail);
  return (
    <section className="light">
      <div className="container">
        <h2>{roomDetail.type}</h2>
        <div className="columns-2">
          <div className="column">
            <img src={`img/pokoje/pokoj0${roomDetail.id + 1}.jpg`} />
            <p>{roomDetail.description}</p>
          </div>
          <ReservationForm />
        </div>
      </div>
    </section>
  );
};
