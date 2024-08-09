import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Layout/Navbar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Takvim için yerelleştirici (localizer) ayarlama
const localizer = momentLocalizer(moment);

function MainPage() {
  const [events, setEvents] = useState([]); // Etkinlikler için state
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleYearChange = (increment) => {
    setCurrentDate(new Date(currentDate.setFullYear(currentDate.getFullYear() + increment)));
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid p-5" style={{ backgroundColor: '#F2EFF8' }}>
        <div className="row justify-content-center">
          <div className="col-md-8">
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
              <div className="col">
                <Calendar
                  localizer={localizer}
                  events={events} // Etkinlik listesi
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 500 }}
                  views={['month', 'week', 'day']}
                  step={60}
                  showMultiDayTimes
                  selectable
                  date={currentDate}
                  onNavigate={(date) => setCurrentDate(date)}
                  onSelectEvent={(event) => alert(event.title)}
                  onSelectSlot={(slotInfo) => {
                    const title = prompt('Etkinlik Başlığı:');
                    if (title) {
                      setEvents([...events, {
                        start: slotInfo.start,
                        end: slotInfo.end,
                        title,
                      }]);
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
