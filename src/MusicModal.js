import React from 'react';
import './MusicModal.css';

const MusicModal = ({ show, onClose }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="music-modal-overlay">
            <div className="music-modal-content">
                <div className="modal-title-bar">
                    <span className="modal-title">streaming</span>
                    <div>
                        <button onClick={onClose} className="exit-button">-</button>
                        <button onClick={onClose} className="exit-button">X</button>
                    </div>
                </div>
                <div className='music-modal-icons'>
                    <a href="https://open.spotify.com/artist/3x8MpdnONnHCqbwizrn29H?si=vP_pzX7eT869LNoAqjg4ug" target="_blank" className='music-modal-icon'>
                        <img src="/cute-decorations/spotify-logo.png" alt="Link to Vayda's Spotify Profile" />
                        <div>spotify</div>
                    </a>
                    <a href="https://music.apple.com/us/artist/vayda/1511871893" target="_blank" className='music-modal-icon'>
                        <img src="/cute-decorations/apple-music.png" alt="Link to Vayda's Apple Music Profile" />
                        <div>apple music</div>
                    </a>
                    <a href="https://tidal.com/browse/artist/6118683" target="_blank" className='music-modal-icon'>
                        <img src="/cute-decorations/tidal-logo.png" alt="Link to Vayda's Tidal Profile" />
                        <div>tidal</div>
                    </a>
                    <a href="https://soundcloud.com/violetnights" target="_blank" className='music-modal-icon'>
                        <img src="/cute-decorations/soundcloud-logo.png" alt="Link to Vayda's Soundcloud Profile" />
                        <div>soundcloud</div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MusicModal;
