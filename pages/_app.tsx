import '../styles/globals.css'
import { Navbar, NavItem } from '../components/Nav'
import Banner from '../components/Banner'
import { useEffect, useState, createContext } from 'react'
import { ThemeProvider } from '../lib/theme'

function TheApp({ Component, pageProps }) {

  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    
    document.documentElement.classList.add("dark")

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", e => {
      if (e.matches && !document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.add("dark")
        setTheme('dark')
      } else {
        document.documentElement.classList.remove("dark")
        setTheme('light')
      }
    })
  }, [])

  return <div className="h-full w-full container-xs container-sm">
    <Banner>
      <p>This site is a work-in-progress! Check developments at</p>
      <a href="https://github.com/anthony-y/www"><span className="underline">github.com/anthony-y/www</span></a>
    </Banner>

    <ThemeProvider.Provider value={[theme, setTheme]}>

      <Navbar>
        <NavItem the_link="/">Showcase</NavItem>
        <NavItem the_link="/blog">Blog</NavItem>
        <NavItem the_link="https://github.com/anthony-y">GitHub</NavItem>
        <NavItem the_link="/CV.pdf">C.V</NavItem>

        <button className="dark:text-white transition" onClick={() => {
          if (theme == 'light') {
            setTheme('dark')
            document.documentElement.classList.add("dark")
          } else {
            setTheme('light')
            document.documentElement.classList.remove("dark")
          }
        }}>
          Toggle Theme
        </button>
      </Navbar>
    
      <Component {...pageProps} />

    </ThemeProvider.Provider>

  </div>
}

export default TheApp;