import React, { useEffect, useState } from 'react';
import './TourDatesModal.css';

const fetchTourDates = async () => {
    const response = await fetch('https://rest.bandsintown.com/artists/vayda/events?app_id=YOUR_APP_ID');
    const data = await response.json();
    return data;
  };

const TourDatesModal = ({ show, onClose }) => {
    const [tourDates, setTourDates] = useState([]);

    useEffect(() => {
        if (show) {
            fetchTourDates().then(data => setTourDates(data));
        }
    }, [show]);

    if (!show) {
        return null;
    }

    return (
        <div className="tour-dates-modal-overlay">
            <div className="tour-dates-modal-content">
                <div className="modal-title-bar">
                    <span className="modal-title">Tour Dates</span>
                    <div>
                        <button onClick={onClose} className="exit-button">-</button>
                        <button onClick={onClose} className="exit-button">X</button>
                    </div>
                </div>
                <div className="tour-dates-list">
                    {tourDates.length === 0 ? (
                        <div className="no-shows-message" style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center', marginTop: '20px' }}>No upcoming shows</div>
                    ) : (
                        tourDates.map((event, index) => (
                            <div key={index} className="tour-dates-item">
                                <div className="tour-dates-city">{event.venue.city}</div>
                                <div className="tour-dates-date">{new Date(event.datetime).toLocaleDateString()}</div>
                                <div className="tour-dates-venue">{event.venue.name}</div>
                                <a href={event.url} target="_blank" rel="noopener noreferrer" className="buy-tickets-button">Buy Tickets</a>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default TourDatesModal;
