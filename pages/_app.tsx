import '../styles/globals.css'

import {Navbar, NavItem} from '../components/Nav'

function TheApp({ Component, pageProps }) {

  return <div className="h-[100vh]">
    <Navbar>
      <NavItem the_link="/">Showcase</NavItem>
      <NavItem the_link="/blog">Blog</NavItem>
      <NavItem the_link="/">C.V</NavItem>
    </Navbar>

    <Component {...pageProps} />

  </div>
}

export default TheApp;