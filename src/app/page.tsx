import './globals.css';
import NavBar from './components/NavBar';
import { SearchBarLarge } from './components/Search';
import { nunito_reg } from './components/fonts';

export default function Home() {
  return (
    <main className="h-screen flex flex-col dark-brown">
      <div><NavBar/></div>
      <div className="flex flex-col flex-grow justify-center items-center">
        <h1 className={`text-7xl mb-8 font-bold ${nunito_reg.className}`}>
          Find a Textbook!
        </h1>
        <SearchBarLarge/>
      </div>
    </main>
  );
}
