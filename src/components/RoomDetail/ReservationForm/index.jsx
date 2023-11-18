import './style.css';
import { useState } from 'react';
export const ReservationForm = ({ price }) => {
  const [stayPrice, setStayPrice] = useState('');
  const [dateFrom, setdateFrom] = useState('');
  const [dateTo, setdateTo] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(0);
  const [board, setBoard] = useState('');
  const [pet, setPet] = useState(false);
  const [kiddyBed, setKiddyBed] = useState(false);
  const [wheelchair, setWheelChair] = useState(false);
  const [email, setEmail] = useState('');
  const [telefon, setTelefon] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-fields">
        <label htmlFor="dateFrom" className="field-label">
          Od:
        </label>

        <input id="dateFrom" className="field-input" type="date" />
        <label htmlFor="dateTill" className="field-label">
          Do:
        </label>
        <input id="dateTill" className="field-input" type="date" />
        <label htmlFor="numberOfGuests" className="field-label">
          Počet osob:
        </label>
        <input
          id="numberOfGuests"
          className="field-input"
          type="number"
          min="1"
        />
        <label htmlFor="board" className="field-label">
          Stravování
        </label>
        <select id="board" className="field-input">
          <option>Žádné</option>
          <option>Snídaně</option>
          <option>Polopenze</option>
          <option>Plná penze</option>
        </select>

        <label htmlFor="pet" className="field-label">
          Domácí mazlíček
        </label>
        <input id="pet" className="field-input" type="checkbox" />
        <label htmlFor="kiddyBed" className="field-label">
          Přistýlka pro dítě
        </label>
        <input id="kiddyBed" className="field-input" type="checkbox" />
        <label htmlFor="wheelchair" className="field-label">
          Bezbariérový přístup{' '}
        </label>
        <input id="wheelchair" className="field-input" type="checkbox" />

        <label htmlFor="emailOfGuests" className="field-label">
          E-mail:
        </label>
        <input id="emailOfGuests" className="field-input" type="email" />
        <label htmlFor="telefonOfGuests" className="field-label">
          Telefon:
        </label>
        <input id="telefonOfGuests" className="field-input" type="tel" />
      </div>
      <h3>Celková cena za pobyt: {stayPrice}</h3>
      <button className="wide">Submit</button>
    </form>
  );
};
