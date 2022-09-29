import {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'

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
      
      <main className='dark:bg-bkg h-screen text-primary'>
        <Navbar/>
      </main>

      <footer>
      </footer>
    </div>
  )
}
