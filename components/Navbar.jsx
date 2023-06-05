'use client';

import { useRouter } from "next/navigation";
import videoBg from '../public/assets/videos/videobg.mp4';

const Navbar = () => {

    const router = useRouter();

    return (
        <>
            <nav className="flex items-center justify-between px-6 font-wide mt-0 border-b border-gray-700 border-opacity-500 bg-blacky">
                <a href="/" className="font-wide font-medium text-3xl text-greeny">Vortex</a>
                <div>
                    <ul className="font-barlow font-medium text-base text-white tracking-wide flex flex-row items-center justify-center">
                        <li className={`list-none px-7 py-6 hover:text-greeny border-b-2 border-transparent hover:border-b-2 hover:border-greeny transition duration-300 ease-in-out ${router.pathname === '/' ? 'border-b2 border-greeny': 'border-b-2 border-transparent'}`}><a href="/">HOME</a></li>
                        <li className="list-none px-7 py-6 hover:text-greeny border-b-2 border-transparent hover:border-b-2 hover:border-greeny transition duration-300 ease-in-out"><a href="#games">GAMES</a></li>
                        <li className="list-none px-7 py-6 hover:text-greeny border-b-2 border-transparent hover:border-b-2 hover:border-greeny transition duration-300 ease-in-out"><a href="/esports">ESPORTS</a></li>
                        <li className="list-none px-7 py-6 hover:text-greeny border-b-2 border-transparent hover:border-b-2 hover:border-greeny transition duration-300 ease-in-out"><a href="/cafe">CAFE</a></li>
                        <li className="list-none px-7 py-6 hover:text-greeny border-b-2 border-transparent hover:border-b-2 hover:border-greeny transition duration-300 ease-in-out"><a href="#about">ABOUT</a></li>
                        <li className="list-none px-7 py-6 hover:text-greeny border-b-2 border-transparent hover:border-b-2 hover:border-greeny transition duration-300 ease-in-out"><a href="#contact">CONTACT</a></li>
                    </ul>
                </div>
            </nav>  
        </>
    );
  }
  
  export default Navbar;
  