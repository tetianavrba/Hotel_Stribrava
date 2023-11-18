import './style.css';
export const ReservationForm = () => {
  return (
    <form>
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
          Bezbariérový přístup
        </label>
        <input id="wheelchair" className="field-input" type="checkbox" />
      </div>
      <button className="wide">Submit</button>
    </form>
  );
};
