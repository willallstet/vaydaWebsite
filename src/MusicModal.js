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
                    <a href="https://vayda.lnk.to/vaytrix" target="_blank" className='music-modal-icon'>
                        <img src="/gifs/album-covers/VAYTRIX.jpeg" alt="Vaytrix Album Cover" />
                        <div>vaytrix</div>
                    </a>
                    <a href="https://vayda.lnk.to/fever" target="_blank" className='music-modal-icon'>
                    <img src="/gifs/album-covers/fever.jpeg" alt="Fever Album Cover" />
                        <div>fever</div>
                    </a>
                    <a href="https://vayda.lnk.to/forrestgump" target="_blank" className='music-modal-icon'>
                    <img src="/gifs/album-covers/forrest-gump.jpeg" alt="Forrest Gump Album Cover" />
                        <div>forrest gump</div>
                    </a>
                    <a href="https://vayda.lnk.to/dawn" target="_blank" className='music-modal-icon'>
                        <img src="/gifs/album-covers/dawn.jpeg" alt="Dawn Album Cover" />
                        <div>dawn</div>
                    </a>
                    <a href="https://vayda.lnk.to/breeze" target="_blank" className='music-modal-icon'>
                        <img src="/gifs/album-covers/breeze.jpg" alt="Breeze Album Cover" />
                        <div>breeze</div>
                    </a>
                    <a href="https://vayda.lnk.to/-vv" target="_blank" className='music-modal-icon'>
                        <img src="/gifs/album-covers/vv.jpeg" alt="VV Album Cover" />
                        <div>vv</div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MusicModal;
