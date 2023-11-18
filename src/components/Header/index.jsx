import './style.css';
// import hotelUrl from './img/hotel.jpg';
// import { useState } from 'react';

export const Header = () => {
  return (
    <>
      <div className="banner">
        <div className="banner__stripe">
          <div className="container">
            <h1>Hotel Stříbřava</h1>
            <p className="lead">
              Rodinný hotel v malebné krajině Českého středohoří.
            </p>
          </div>
        </div>
      </div>
      <div>{/* <img src={hotelUrl} alt="hotel Stříbřava" /> */}</div>
    </>
  );
};
