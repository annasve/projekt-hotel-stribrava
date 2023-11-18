import { useState } from 'react';
import dayjs from 'dayjs';

export const RoomForm = ({ room, onFormSubmit }) => {
  //--------useStates--------
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

  //--------counting total price---------
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

  //--------form field events---------
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

  //--------submit event - 1st version w/o sending--------
  const submitHandle = (e) => {
    e.preventDefault();
    console.log(to, from, people, meal, pets, child, noLimits, email, phone);
  };

  //--------submit event - 2nd version for API communication--------
  //todo: don't forget to change name of the function
  const submitHandle2 = (e) => {
    e.preventDefault();

    const order = JSON.stringify({
      from: from,
      to: to,
      people: people,
      meal: meal,
      pets: pets,
      child: child,
      nolimits: noLimits,
      email: email,
      phone: phone,
      status: 'new',
    });

    //console.log(order);

    //console.log(to, from, people, meal, pets, child, noLimits, email, phone);
    fetch('http://localhost:4000/api/objednavky', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: order,
    });
  };

  // fetch('http://localhost:4000/api/objednavky', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: order,
  // });

  //   fetch('https://it-seznamka.cz/me/profile', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: 'petr.laskavy',
  //   },
  //   body: JSON.stringify({
  //     name: 'Petr Laskavý',
  //     text: 'Hledám někoho, kdo rozumí mé lásce k programování a pomůže mi s debugováním mého křehkého srdce',
  //     age: 25,
  //   }),
  // });

  // const fetchRooms = async () => {
  //   const response = await fetch('http://localhost:4000/api/pokoje');
  //   const data = await response.json();
  //   console.log(data.result);
  //   setRooms(data.result);
  // };

  //2023-11-03 2023-10-19 1 none true false false 123@mail.com 4545
  // {
  //   to: to,
  //   from: from,
  // }

  //--------tohle vrací konzole z řádku 131 - vypadá ok
  // {"from":"2023-11-18",
  // "to":"2023-11-25",
  // "people":"1",
  // "meal":"none",
  // "pets":true,
  // "child":false,
  // "nolimits":false,
  // "email":"123@mail.com",
  // "phone":"60600666"}
  //------------------

  //  "from": "18.11.2023",
  //  "to": "19.11.2023",
  //  "people": "2",
  //  "meal": "zadne",
  //  "pets": false,
  //  "child": false,
  //  "nolimits": false,
  //  "email": "guest123@example.com",
  //  "phone"

  //---------html and css--------
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
        <form onSubmit={submitHandle2}>
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
