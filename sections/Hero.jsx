import videoBg1 from '../public/assets/videos/videobg.mp4';
import '@styles/globals.css';


const Hero = () => {
  return (
    <div className="hero">

        <div id="line">
            <div className="" id="triangle"></div>
            <div className="" id="box"></div>
            <div className="" id="box2"></div>
            <div className="" id="box3"></div>
            <div className="" id="box4"></div>
            <div className="" id="box5"></div>
            <div className="" id="box6"></div>
            <div id="box15"></div>
            <div className="" id="box7"></div>
            <div className="" id="box7"></div>
            <div className="" id="box9"></div>
            <div className="" id="box8"></div>
        </div>

        <video src="../public/assets/videos/videobg1.mp4" autoplay muted loop plays-inline className="video"></video>

        <nav id="navbar" className="flex items-center justify-between px-6 mt-0 border-b">
            <a href="/" id="logo"className="font-medium text-3xl">Vortex</a>
            <div>
                <ul id="ulel" className="font-barlow font-medium text-base text-white tracking-wide flex flex-row items-center justify-center">
                    <li className="list-none px-7 py-6 border-b-2 border-transparent hover:border-b-2 transition duration-300 ease-in-out"><a href="/">HOME</a></li>
                    <li className="list-none px-7 py-6 border-b-2 border-transparent hover:border-b-2 transition duration-300 ease-in-out"><a href="#games-section">GAMES</a></li>
                    <li className="list-none px-7 py-6 border-b-2 border-transparent hover:border-b-2 transition duration-300 ease-in-out"><a href="/esports">ESPORTS</a></li>
                    <li className="list-none px-7 py-6 border-b-2 border-transparent hover:border-b-2 transition duration-300 ease-in-out"><a href="/cafe">CAFE</a></li>
                    <li className="list-none px-7 py-6 border-b-2 border-transparent hover:border-b-2 transition duration-300 ease-in-out"><a href="#about">ABOUT</a></li>
                    <li className="list-none px-7 py-6 border-b-2 border-transparent hover:border-b-2 transition duration-300 ease-in-out"><a href="#contact">CONTACT</a></li>
                </ul>
            </div>
        </nav>
        <div className="mains">

            <div className="mains2">
                <h1 className="text-9xl main-title1">VORTEX</h1>
                <h1 className="text-5xl main-title2">GAMING LOUNGE</h1>
                <button className="button">
                    <span className="button_lg">
                        <span className="button_sl"></span>
                        <span className="button_text">BOOK NOW</span>
                    </span>                
                </button>
            </div>
        </div>


    </div>
    


  )
}

export default Hero