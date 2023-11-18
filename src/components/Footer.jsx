import mapa from '././img/mapa.png';

export const Footer = () => {
  return (
    <div class="container columns-2">
      <div class="columns">
        <h2>Kontakt</h2>
        <p>
          Hotel Stribrava <br />
          Ke Kamenne lavce 12 <br />
          317 24 Libnice nad Stribravou
          <br />
          <br />
          recepce@hotelstribrava.cz
        </p>
      </div>
      <img src={mapa} />
    </div>
  );
};
