import './App.css'
import { Hero, NavBar, Sales, Cart, FlexContent, Stories, Footer } from './components'
import { heroapi } from '@/data/hero.tsx'
import { popularsales } from './data/popularsales.tsx'
import { highlight } from './data/highlight.tsx'
import { topratesales } from './data/topratesales.tsx'
import { sneaker } from './data/sneaker.tsx'
import { story } from './data/story.tsx'
import { footerAPI } from './data/footer.tsx'


function App() {

  return (
    <>
      <NavBar />
      <Cart />
      <main>
        <Hero heroapi={heroapi}/>
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={topratesales} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI}/>
    </>
  )
}

export default App
