import '../styles/globals.css'
import { Navbar, NavItem } from '../components/Nav'
import Banner from '../components/Banner'
import { createContext } from 'react'
import ThemeContext from '../lib/theme'

function TheApp({ Component, pageProps }) {

  return <div className="h-full w-full container-xs container-sm">
    <Banner>
      <p>This site is a work-in-progress! Check developments at</p>
      <a href="https://github.com/anthony-y/www"><span className="underline">github.com/anthony-y/www</span></a>
    </Banner>

    <Navbar>
      <NavItem the_link="/">Showcase</NavItem>
      <NavItem the_link="/blog">Blog</NavItem>
      <NavItem the_link="https://github.com/anthony-y">GitHub</NavItem>
      <NavItem the_link="/CV.pdf">C.V</NavItem>
    </Navbar>

    <ThemeContext.Provider value='dark'>
      <Component {...pageProps} />
    </ThemeContext.Provider>

  </div>
}

export default TheApp;