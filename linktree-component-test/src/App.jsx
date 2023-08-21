import React from 'react';
import MusicPlayer from './components/music-player/MusicPlayer';
import musicPreview from './components/music-player/assets/music.mp3';;
import imagePreview2 from './components/music-player/assets/preview-2.png';
import InstagramPreview from './components/social-profile/instagram/Instagram';
import SpotifyPreview from './components/spotify-preview/SpotifyPreview';
import './App.css'

export default function App() {

  return (
    <div className="App">

      <div className='main-content'>
        <h1>Social Link</h1>
        <InstagramPreview username="karki_sarthak_7338" />

        <h1>Music</h1>

        <MusicPlayer audioSrc={musicPreview} imagePreview={imagePreview2} musicTitle="Padam Padam" />
        <br />
        <SpotifyPreview url="https://open.spotify.com/embed/playlist/37i9dQZF1DX8NTLI2TtZa6" />
        <br />
        <SpotifyPreview url="https://open.spotify.com/embed/playlist/37i9dQZF1DX8NTLI2TtZa6" />
        <br />

    

      </div>
    </div>


  );
}
