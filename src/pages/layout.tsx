import bg from "../assets/gif2.gif"
import TypingEffect from "../components/layout/lyric_play";
import ReactHowler from "react-player"
import { useState } from "react";

const Layout = ()=> {
  const [playing, setPlaying] = useState<boolean>(false)
  const [showButton, setShowButton] = useState<boolean>(true)
  const [showLyrics, setShowLyrics] = useState<boolean>(false);

  const handleShowLyrics = () => {
    setShowLyrics(true)
  }
  return (
      <div className="relative w-full h-screen">
        <ReactHowler src="https://organisational-blush-jvddvpsu3p.edgeone.app/TikSave.io_7507255148146658567.mp3" loop={false} playing={playing} onStart={() => {}} />
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
          <div className="flex items-center justify-center h-full">
           {showButton && (<button className="px-6 py-3 bg-blue-300 text-white font-semibold rounded-xl shadow-md transition transform duration-150 ease-in-out hover:bg-white-700 hover:shadow-lg active:scale-95 active:shadow-sm" onClick={() => { setPlaying(true); setShowButton(false); handleShowLyrics(); }}> Play </button>) }
           {showLyrics && (<TypingEffect text="Tanpa metafora" startAt={0.9} speed={0.180} clearAfter={0.6}/> )}
           {showLyrics && (<TypingEffect text="Dan" startAt={4.2} speed={0.15} clearAfter={1}/> )}
           {showLyrics && (<TypingEffect text="Analogi" startAt={6} speed={0.15} clearAfter={0.8} /> )}
           {showLyrics && (<TypingEffect text="Kiasan berbelit diksi" startAt={8} speed={0.13} clearAfter={1.1} color="yellow"/> )}
           {showLyrics && (<TypingEffect text="Tanpa berbungkus fiksi" startAt={12} speed={0.1} clearAfter={1} color="yellow"/> )}
           {showLyrics && (<TypingEffect text="AAAAAAAAAAAAAAKUUUUU" startAt={15.5} speed={0.1} clearAfter={0.65} color="white"/> )}
           {showLyrics && (<TypingEffect text="TAKUT" startAt={18.5} speed={0.15} clearAfter={1} color="red"/> )}
           {showLyrics && (<TypingEffect text="Untuknya Oo Tuan" startAt={20.5} speed={0.15} clearAfter={1} color="white"/> )}
           {showLyrics && (<TypingEffect text="WAHAI" startAt={24.5} speed={0.08} clearAfter={0.55} color="yellow"/> )}
           {showLyrics && (<TypingEffect text="KEMATIAN" startAt={25.5} speed={0.1} clearAfter={1.2} color="red"/> )}
           {showLyrics && (<TypingEffect text="Ku tak bisa melawan" startAt={28} speed={0.12} clearAfter={1.3} color="yellow"/> )}
          </div>
        </div>
      </div>
  )
};

export default Layout
