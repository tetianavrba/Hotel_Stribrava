import './style.css';
import { Header } from '../../components/Header';
import { Rooms } from '../../components/HotelovePokoje';
import { Footer } from '../../components/Footer';
import { useState } from 'react';
import { RoomDetail } from '../../components/RoomDetail';

export const HomePage = () => {
  const [roomDetail, setRoomDetail] = useState('Vyberte si pokoj');

  return (
    <>
      <Header />
      <Rooms onRoomChoice={setRoomDetail} />
      <RoomDetail roomDetail={roomDetail} />

      <Footer />
    </>
  );
};
