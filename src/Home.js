import React, { useState } from 'react';
import Modal from './Modal';
import MerchModal from './merchModal';
import MusicModal from './MusicModal';
import TourDatesModal from './TourDatesModal'; // Import the new TourDatesModal
import './Home.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVintageModalOpen, setIsVintageModalOpen] = useState(false);
  const [isMusicModalOpen, setIsMusicModalOpen] = useState(false); // State for Music Modal
  const [isTourDatesModalOpen, setIsTourDatesModalOpen] = useState(false); // State for Tour Dates Modal

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openVintageModal = () => {
    setIsVintageModalOpen(true);
  };

  const closeVintageModal = () => {
    setIsVintageModalOpen(false);
  };

  const openMusicModal = () => {
    setIsMusicModalOpen(true);
  };

  const closeMusicModal = () => {
    setIsMusicModalOpen(false);
  };

  const openTourDatesModal = () => {
    setIsTourDatesModalOpen(true);
  };

  const closeTourDatesModal = () => {
    setIsTourDatesModalOpen(false);
  };

  return (
    <div className="home-container">
      <a href="/" style={{ textDecoration: 'none' }}><h1>VAYDA</h1></a>
      <div className="icon-container">
        <a href="/#" onClick={openVintageModal} className="icon" style={{ top: window.innerHeight * -0.05, left: window.innerWidth * 0.05 }}>
          <img src="/gifs/shopping-bag-transparent.gif" alt="spinning green shopping bag" className="spinning-icon" />
          <div>merch</div>
        </a>
        <a href="#" onClick={openMusicModal} className="icon" style={{ top: window.innerHeight * 0, left: window.innerWidth - window.innerWidth / 1.9 }}>
          <img src="/gifs/CD.gif" alt="spinning CD" className="spinning-icon" style={{ width: '90%', height: '90%' }}/>
          <div>music</div>
        </a>
        <a href="https://www.instagram.com/1vayda/" target="_blank" rel="noopener noreferrer" className="icon" style={{ top: window.innerHeight * 0, left: window.innerWidth * 0.3 }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <img src="/cute-decorations/vayda_ig_edit.png" alt="image of Vayda posing" className="spinning-icon" style={{ width: window.innerWidth * 0.1, height: 'auto' }} />
            <img src="/cute-decorations/spinning-heart.gif" alt="spinning heart" style={{ position: 'absolute', top: -10, left: -10, width: '30%', height: '30%', zIndex: 10000 }} />
          </div>
          <div>insta</div>
        </a>
        <a href="https://www.tiktok.com/@akavayda?_t=8qeufEGsO8B&_r=1" target="_blank" rel="noopener noreferrer" className="icon" style={{ top: window.innerHeight *0.3, left: window.innerWidth * 0.7 }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <img src="/gifs/tiktok-no-border-razr.gif" alt="TikTok UI showing Vayda Dancing" className="spinning-icon" style={{ width: window.innerWidth * 0.1, height: 'auto' }} />
          </div>
          <div>tiktok</div>
        </a>
        <a href="#" onClick={openTourDatesModal} className="icon" style={{ top: window.innerHeight * -0.2, right: window.innerWidth * 0.075 }}>
          <img src="/gifs/dates-transparent.gif" alt="spinning calendar" className="spinning-icon" />
          <div>tour dates</div>
        </a>
        <a href="https://www.youtube.com/channel/UCtfB-bYyaLSKxara8-oUFdg" target="_blank" rel="noopener noreferrer" className="icon" style={{ top: window.innerHeight * 0.5, left: window.innerWidth * 0.2 }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <img src="/cute-decorations/vayda-youtube.gif" alt="clip of vayda music video within a windows 95 style window" className="spinning-icon" style={{ width: window.innerWidth * 0.12, height: 'auto' }} />
          </div>
          <div>youtube</div>
        </a>
        <a href="https://x.com/vaydaprimadonna" target="_blank" rel="noopener noreferrer" className="icon" style={{ top: window.innerHeight * 0.5, left: window.innerWidth * 0.55 }}>
            <img src="/gifs/x.gif" alt="pixelated gif of the X logo cycling between blue, green, black, and red" className="spinning-icon" style={{ width: window.innerWidth * 0.075, height: 'auto' }} />
          <div>x</div>
        </a>
        <a href="#" onClick={openModal} className="icon" style={{ top: window.innerHeight * 0.4, left: window.innerWidth * 0.4 }}>
          <img src="/gifs/mail-transparent.gif" alt="spinning 3D mail icon" className="spinning-icon" style={{ width: window.innerWidth * 0.075, height: 'auto' }} />
          <div>newsletter</div>
        </a>

      </div>
      <Modal show={isModalOpen} onClose={closeModal} />
      <MerchModal show={isVintageModalOpen} onClose={closeVintageModal} />
      <MusicModal show={isMusicModalOpen} onClose={closeMusicModal} />
      <TourDatesModal show={isTourDatesModalOpen} onClose={closeTourDatesModal} />
    </div>
  );
};

export default Home;
