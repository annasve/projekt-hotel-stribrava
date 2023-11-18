import { useState } from 'react';

const RoomForm = ({ room, onFormSubmit }) => {
  const [from, setFrom] = useState();

  const sum = 1000;

  const submitHandle = () => {};

  return (
    <div class="container">
      <h2>
        Pokoj {room.name}, {room.price} kc na osobu za noc
      </h2>
      <div class="columns-2">
        <div class="column">
          <img src="img/image1.svg" alt="room image" />
          <p>{room.desc}</p>
        </div>
        <form>
          <div class="form-fields">
            <label htmlFor="from" class="field-label">
              Od:
            </label>
            <input id="from" class="field-input" type="date" />

            <label htmlFor="to" class="field-label">
              Do:
            </label>
            <input id="to" class="field-input" type="date" />

            <label htmlFor="people" class="field-label">
              Pocet osob:
            </label>
            <input id="people" class="field-input" type="number" />

            <label htmlFor="meal" class="field-label">
              Stravovani:
            </label>
            <select id="meal" class="field-input">
              <option value="none">Zadne</option>
              <option value="breakfast">Snidane</option>
              <option value="lunch">Obedy</option>
              <option value="dinner">Vecere</option>
              <option value="all-inclusive">All inclusive</option>
            </select>

            <label htmlFor="pets" class="field-label">
              Domaci mazlicek:
            </label>
            <input id="pets" class="field-input" type="checkbox" />

            <label htmlFor="child" class="field-label">
              Pristylka pro dite:
            </label>
            <input id="child" class="field-input" type="checkbox" />

            <label htmlFor="no-limits" class="field-label">
              Bezbarierovy pristup:
            </label>
            <input id="no-inputs" class="field-input" type="checkbox" />

            <label htmlFor="email" class="field-label">
              E-mail:
            </label>
            <input id="email" class="field-input" type="email" />

            <label htmlFor="phone" class="field-label">
              Telefon:
            </label>
            <input id="phone" class="field-input" type="tel" />
          </div>
          <p className="sum">Celkova cena za pobyt: {sum} Kc</p>
          <button class="wide">Odeslat poptavku</button>
        </form>
      </div>
    </div>
  );
};
