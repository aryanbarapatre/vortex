import '../styles/globals.css';
import Navbar from '@components/Navbar';
import Hero from '@sections/Hero'
import Games from '@sections/games';

const Home = () => {
  return (
    <div>
        <Hero />
        <Games />
    </div>
  );
}

export default Home;