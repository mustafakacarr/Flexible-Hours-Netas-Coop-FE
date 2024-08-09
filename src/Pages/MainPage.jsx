import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Layout/Navbar';

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

  const handleListeleClick = () => {
    console.log('Listele button clicked');
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid p-5" style={{ backgroundColor: '#F2EFF8' }}>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="row mb-3">
              <div className="col">
                <label className="form-label">Başlangıç</label>
                <div className="input-group">
                  <DatePicker
                    selected={startDate}
                    onChange={handleStartChange}
                    className="form-control"
                    dateFormat="dd/MM/yyyy"
                    placeholderText="DD/MM/YYYY"
                  />
                  <span className="input-group-text"><i className="bi bi-calendar"></i></span>
                </div>
              </div>
              <div className="col">
                <label className="form-label">Bitiş</label>
                <div className="input-group">
                  <DatePicker
                    selected={endDate}
                    onChange={handleEndChange}
                    className="form-control"
                    dateFormat="dd/MM/yyyy"
                    placeholderText="DD/MM/YYYY"
                  />
                  <span className="input-group-text"><i className="bi bi-calendar"></i></span>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-auto">
                <button 
                  className="btn btn-secondary mx-2"
                  onClick={() => handleYearChange(-1)}
                >
                  &lt; Geri
                </button>
                <button 
                  className="btn btn-secondary mx-2"
                  onClick={() => handleYearChange(1)}
                >
                  İleri &gt;
                </button>
              </div>
            </div>
            <div className="row justify-content-center mt-4">
              <div className="col-auto">
                <button 
                  className="btn btn-outline-primary mx-2"
                  onClick={handleListeleClick}
                >
                  Listele
                </button>
                <button 
                  className="btn btn-outline-primary mx-2"
                >
                  Düzenle
                </button>
                <button 
                  className="btn btn-outline-primary mx-2"
                >
                  Rapor Oluştur
                </button>
              </div>
            </div>
            <div className="row justify-content-center mt-4">
              <div className="col text-center">
                <div className="calendar-container">
                  <DatePicker
                    selected={startDate}
                    onChange={handleStartChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    inline
                    calendarClassName="custom-calendar"
                    highlightDates={[
                      {
                        "react-datepicker__day--highlighted-start": [startDate],
                        "react-datepicker__day--highlighted-end": [endDate],
                        "react-datepicker__day--highlighted-middle": [startDate, endDate],
                      }
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        
        .custom-calendar .react-datepicker__day--highlighted-start {
          background-color: purple;
          color: white;
        }

        .custom-calendar .react-datepicker__day--highlighted-middle,
        .custom-calendar .react-datepicker__day--highlighted-end {
          background-color: #F2EFF8;
          color: #333;
        }

        .custom-calendar {
          transform: scale(1.2); /* Takvimi büyüt */
          max-width: 600px; /* Genişliği artır */
          margin: auto;
        }

        .custom-calendar .react-datepicker__day,
        .custom-calendar .react-datepicker__header {
          font-size: 0.8em; 
        }

       
        .calendar-container {
          margin-top: 20px;
        }
      `}</style>
    </>
  );
}

export default MainPage;
