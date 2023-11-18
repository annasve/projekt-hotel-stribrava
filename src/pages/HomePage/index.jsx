import { RoomForm } from '../../components/RoomForm';
import './style.css';

import { Header } from '../../components/Header';
import { RoomsList } from '../../components/RoomsList';

import { Footer } from '../../components/Footer';

const room = {
  id: 0,
  name: 'Úkryt',
  price: 450,
  desc: 'Strohý avšak pohodlný pokoj ideální pro hosty, kteří chtějí maximálně ušetřit a hledají cenově dostupné ubytování bez ztráty základního komfortu. Vhodné pro všechny, kdo chtějí v našem hotelu rychle přečkat nepřízeň počasí a vydat se rychle zase na cestu ať už pěší nebo po řece.',
  image: './img/pokoj01.jpg',
};

export const HomePage = () => {
  return (
    <div className="container">
      <Header />
      {/* <div class="banner">
        <div class="banner__stripe">
          <div class="container">
            <h1>Template</h1>
            <p class="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              sequi.
            </p>
          </div>
        </div>
      </div> */}

      <RoomsList />
      {/* <section class="dark">
        <div class="container">
          <h2>Heading</h2>
          <p>Quas odio quidem, enim nihil unde quia temporibus vitae in ab.</p>
          <div class="cards-row">
            <div class="card">
              <img class="card__image" src="img/image1.svg" />
              <div class="card__title">Card 1</div>
              <div class="card__body">Sunt natus</div>
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
      </section> */}

      <section class="light">
        <RoomForm room={room} />
      </section>

      <section class="dark">
        <Footer />
      </section>
    </div>
  );
};
