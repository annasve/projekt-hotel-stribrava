import './style.css';
// import hotelUrl from './img/hotel.jpg';
import { useState } from 'react';

export const RoomsList = () => {
  return (
    <section class="dark">
      <div class="container">
        <h2>Naše pokoje</h2>
        <p>Vyberte si, který z našich pokojů je pro vás ten pravý.</p>
        <div class="cards-row">
          <div class="card">
            <img class="card__image" src="img/image1.svg" />
            <div class="card__title">např. Úkryt</div>
            <div class="card__body">XX Kč na osobu</div>
          </div>

          <div class="card">
            <img class="card__image" src="img/image1.svg" />
            <div class="card__title">Card 2</div>
            <div class="card__body">Laboriosam</div>
          </div>

          <div class="card">
            <img class="card__image" src="img/image1.svg" />
            <div class="card__title">Card 3</div>
            <div class="card__body">Eveniet officiis</div>
          </div>
        </div>
      </div>
    </section>
  );
};
