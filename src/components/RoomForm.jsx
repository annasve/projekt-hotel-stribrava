import { useState } from 'react';
import dayjs from 'dayjs';

export const RoomForm = ({ room, onFormSubmit }) => {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [people, setPeople] = useState(0);
  const [meal, setMeal] = useState('none');
  const [pets, setPets] = useState(false);
  const [child, setChild] = useState(false);
  const [noLimits, setNoLimits] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  // const [sum, setSum] = useState(0);

  const countSum = () => {
    const numberOfDays = dayjs(to).diff(dayjs(from), 'day');
    const RoomSum = numberOfDays * room.price * people;
    let childSum = 0;
    if (child) {
      childSum = RoomSum / 2;
    }
    let petSum = 0;
    if (pets) {
      petSum = RoomSum;
    }
    const mealSum = 0;
    // setSum(RoomSum + childSum + petSum + mealSum);
    console.log(RoomSum, numberOfDays, room.price, people);
    return RoomSum + childSum + petSum + mealSum;
  };

  const onFromChanged = (e) => {
    setFrom(e.target.value);
  };

  const onToChanged = (e) => {
    setTo(e.target.value);
  };

  const onPeopleChanged = (e) => {
    setPeople(e.target.value);
  };

  const onMealChanged = (e) => {
    setMeal(e.target.value);
  };

  const onPetsChanged = (e) => {
    setPets(e.target.checked);
    console.log(e.target.checked);
  };

  const onChildChanged = (e) => {
    setChild(e.target.checked);
  };

  const onNoLimitsChanged = (e) => {
    setNoLimits(e.target.checked);
  };

  const onEmailChanged = (e) => {
    setEmail(e.target.value);
  };

  const onPhoneChanged = (e) => {
    setPhone(e.target.value);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    console.log(to, from, people, meal, pets, child, noLimits, email, phone);
  };

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
        <form onSubmit={submitHandle}>
          <div class="form-fields">
            <label htmlFor="from" class="field-label">
              Od:
            </label>
            <input
              onChange={onFromChanged}
              id="from"
              value={from}
              class="field-input"
              type="date"
            />

            <label htmlFor="to" class="field-label">
              Do:
            </label>
            <input
              onChange={onToChanged}
              id="to"
              value={to}
              class="field-input"
              type="date"
            />

            <label htmlFor="people" class="field-label">
              Pocet osob:
            </label>
            <input
              onChange={onPeopleChanged}
              id="people"
              value={people}
              class="field-input"
              type="number"
            />

            <label htmlFor="meal" class="field-label">
              Stravovani:
            </label>
            <select
              onChange={onMealChanged}
              value={meal}
              id="meal"
              class="field-input"
            >
              <option value="none">Zadne</option>
              <option value="breakfast">Snidane</option>
              <option value="half">Polopenzi</option>
              <option value="all-inclusive">Plnou penzi</option>
            </select>

            <label htmlFor="pets" class="field-label">
              Domaci mazlicek:
            </label>
            <input
              onChange={onPetsChanged}
              value={pets}
              id="pets"
              class="field-input"
              type="checkbox"
            />

            <label htmlFor="child" class="field-label">
              Pristylka pro dite:
            </label>
            <input
              onChange={onChildChanged}
              id="child"
              value={child}
              class="field-input"
              type="checkbox"
            />

            <label htmlFor="no-limits" class="field-label">
              Bezbarierovy pristup:
            </label>
            <input
              onChange={onNoLimitsChanged}
              id="no-limits"
              value={noLimits}
              class="field-input"
              type="checkbox"
            />

            <label htmlFor="email" class="field-label">
              E-mail:
            </label>

            <input
              onChange={onEmailChanged}
              value={email}
              id="email"
              class="field-input"
              type="email"
            />

            <label htmlFor="phone" class="field-label">
              Telefon:
            </label>
            <input
              onChange={onPhoneChanged}
              value={phone}
              id="phone"
              class="field-input"
              type="tel"
            />
          </div>
          <p className="sum">Celkova cena za pobyt: {countSum()} Kc</p>
          <button class="wide">Odeslat poptavku</button>
        </form>
      </div>
    </div>
  );
};
