import { useState } from 'react';
import './styles/main.css';
import logoImg from './assets/logo-nlw-esports.svg';
import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";

function App() {
  const [] = useState(false);

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>Seu <span className='text-transparent bg-duo-gradient bg-clip-text'>duo</span> está aqui.</h1>
      <button>Clique aqui</button>
      Usuário Clicou

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <GameBanner bannerUrl="/game-1.png" title="title 1" adsCount={1} />
        <GameBanner bannerUrl="/game-2.png" title="title 2" adsCount={2} />
        <GameBanner bannerUrl="/game-3.png" title="title 3" adsCount={3} />
        <GameBanner bannerUrl="/game-4.png" title="title 4" adsCount={4} />
        <GameBanner bannerUrl="/game-5.png" title="title 5" adsCount={5} />
        <GameBanner bannerUrl="/game-6.png" title="title 6" adsCount={6} />
      </div>

      <CreateAdBanner />
    </div>
  )
}

export default App
