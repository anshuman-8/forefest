import {useState, useEffect} from 'react'
import HomePage from '../components/HomePage';
import Footer from '../components/Footer';

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(
        (window.matchMedia("(prefers-color-scheme:light)").matches
          ? false
          : true)
    );
  }, []);

  return (
    <div className={isDark?'dark':""}>
      
      <main className='bg-bkg h-max dark:bg-bkg  text-primary'>
        <HomePage/>
      </main>

      <footer className='bg-slate-900 min-h-fit'>
        <div className='h-32'></div>
        <Footer/>
      </footer>
    </div>
  )
}
