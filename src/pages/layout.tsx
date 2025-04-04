import bg from "../assets/gif.gif"
import TypingEffect from "../components/layout/lyric_play";

const Layout = ()=> {
  return (
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
          <div className="flex items-center justify-center h-full">
             <TypingEffect text="Karena Kamu Cantik" startAt={0.3} speed={0.09} clearAfter={1.4}/>
             <TypingEffect text="Kan Kuberi Segalanya Apa yang Ku Punya" startAt={3.4} speed={0.09} clearAfter={0.2}/>
             <TypingEffect text="Dan Hatimu Baik" startAt={7.4} speed={0.10} clearAfter={1.5}/>
             <TypingEffect text="Sempurnalah Duniaku Saat Kau di Sisiku" startAt={10.5} speed={0.09} clearAfter={0.3}/>
             <TypingEffect text="Bukan karena Makeup di Wajahmu" startAt={14.5} speed={0.09} clearAfter={0.5}/>
             <TypingEffect text="Atau Lipstik Merah Itu" startAt={18.0} speed={0.09} clearAfter={1.8}/>
             <TypingEffect text="Lembut Hati Tutur Kata" startAt={21.9} speed={0.08} clearAfter={0.5}/>
             <TypingEffect text="Terciptalah Cinta yang Kupuja" startAt={24.4} speed={0.09} clearAfter={1.3}/>
             <TypingEffect text="HAPPY BIRTHDAY MIA" startAt={28.5} speed={0.09} clearAfter={9}/>
          </div>
        </div>
      </div>
  )
};

export default Layout