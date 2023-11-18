import { useEffect } from 'react';
import { Room } from './Pokoj';
import { useState } from 'react';
import './style.css';

export const Rooms = () => {
  const [rooms, setRooms] = useState();

  useEffect(() => {
    const fetchRoomData = async () => {
      const response = await fetch(`http://localhost:4000/api/pokoje`);
      const data = await response.json();
      console.log(data);
      setRooms(data.result);
    };
    fetchRoomData();
  }, []);
  console.log('RoomData', rooms);
  return (
    <section className="dark">
      <div className="container">
        <h2>Naše pokoje</h2>
        <p>Vyberte si, který z našich pokojů je pro Vás ten pravý.</p>
        <div className="cards-row">
          {rooms ? (
            rooms.map((room) => {
              return <Room key={room.id} room={room} />;
            })
          ) : (
            <p>Loading</p>
          )}
          {/* 
          <div class="card">
            <img class="card__image" src="img/pokoje/pokoj02.jpg" />
            <div class="card__title">Card 2</div>
            <div class="card__body">Laboriosam</div>
          </div>

          <div class="card">
            <img class="card__image" src="img/pokoje/pokoj03.jpg" />
            <div class="card__title">Card 3</div>
            <div class="card__body">Eveniet officiis</div>
          </div>
          <div class="card">
            <img class="card__image" src="img/pokoje/pokoj04.jpg" />
            <div class="card__title">Card 3</div>
            <div class="card__body">Eveniet officiis</div>
          </div>
          <div class="card">
            <img class="card__image" src="img/pokoje/pokoj05.jpg" />
            <div class="card__title">Card 3</div>
            <div class="card__body">Eveniet officiis</div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
