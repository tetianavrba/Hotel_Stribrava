import { useEffect } from 'react';
import { Room } from './Pokoj';
import { useState } from 'react';
import './style.css';

export const Rooms = ({ onRoomChoice }) => {
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
      <div className="container2">
        <h2>Naše pokoje</h2>
        <p>Vyberte si, který z našich pokojů je pro Vás ten pravý.</p>
        <div className="cards-row">
          {rooms ? (
            rooms.map((room) => {
              return (
                <Room key={room.id} room={room} onRoomChoice={onRoomChoice} />
              );
            })
          ) : (
            <p>Loading</p>
          )}
        </div>
      </div>
    </section>
  );
};
