//import './style.css';
// import hotelUrl from './img/hotel.jpg';
import { useState, useEffect } from 'react';

export const RoomsList = () => {
  const [rooms, setRooms] = useState([]);

  //const [selected, setSelected] = useState(false);
  useEffect(() => {
    console.log('jsem tady');
  }, []);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch('http://localhost:4000/api/pokoje');
      const data = await response.json();
      console.log(data.result);
      setRooms(data.result);
    };

    fetchRooms();
  }, []);

  const Room = ({ rooms }) => {
    return rooms.map((item) => (
      <div class="card">
        <img class="card__image" src={item.image} />
        <div class="card__title">{item.name}</div>
        <div class="card__body">{item.price} Kč na osobu</div>
      </div>
    ));
  };

  return (
    <section class="dark">
      <div class="container">
        <h2>Naše pokoje</h2>
        <p>Vyberte si, který z našich pokojů je pro vás ten pravý.</p>
        <div class="cards-row">
          <Room rooms={rooms} />
        </div>
      </div>
    </section>
  );
};
