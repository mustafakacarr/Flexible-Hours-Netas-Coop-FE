import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function MainPage() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleStartChange = (date) => {
    setStartDate(date);
  };

  const handleEndChange = (date) => {
    setEndDate(date);
  };

  const handleYearChange = (increment) => {
    setStartDate(new Date(startDate.setFullYear(startDate.getFullYear() + increment)));
    setEndDate(new Date(endDate.setFullYear(endDate.getFullYear() + increment)));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <label>Başlangıç</label>
          <DatePicker
            selected={startDate}
            onChange={handleStartChange}
            className="form-control"
            dateFormat="dd/MM/yyyy"
            placeholderText="DD/MM/YYYY"
          />
        </div>
        <div className="col">
          <label>Bitiş</label>
          <DatePicker
            selected={endDate}
            onChange={handleEndChange}
            className="form-control"
            dateFormat="dd/MM/yyyy"
            placeholderText="DD/MM/YYYY"
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col text-center">
          <button className="btn btn-secondary mx-2" onClick={() => handleYearChange(-1)}>
            &lt; Geri
          </button>
          <button className="btn btn-secondary mx-2" onClick={() => handleYearChange(1)}>
            İleri &gt;
          </button>
        </div>
      </div>
      <div className="row mt-5 text-center">
        <div className="col">
          <button className="btn btn-primary mx-2">Listele</button>
          <button className="btn btn-primary mx-2">Düzenle</button>
          <button className="btn btn-primary mx-2">Rapor Oluştur</button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
