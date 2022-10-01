import { useState, useEffect } from 'react';
import './styles/main.css';
import logoImg from './assets/logo-nlw-esports.svg';
import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { CreateAdModal } from "./components/CreateAdModal";
import * as Dialog from "@radix-ui/react-dialog";
import { Game } from "./interfaces/Game"
import axios from 'axios';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: {
      perView: 6,
      spacing: 10,
    }
  })

  useEffect(() => {
      axios('http://localhost:3333/games')
        .then( response => { setGames(response.data) });
    }, []);

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>Seu <span className='text-transparent bg-duo-gradient bg-clip-text'>duo</span> está aqui.</h1>

      <div className='keen-slider mt-16' ref={ref}>
        {games.map(game => {
          return (
            <GameBanner
              key={game.id} 
              bannerUrl={game.bannerUrl} 
              title={game.title}
              adsCount={game._count.ads} 
            />
          )
        })}
      </div>
      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default App
