import './App.css'
import React, { Suspense } from 'react';
import {  NavBar,  Cart  } from './components'
import { heroapi } from '@/data/hero.tsx'
import { popularsales } from './data/popularsales.tsx'
import { highlight } from './data/highlight.tsx'
import { toprateslaes } from './data/data.tsx'
import { sneaker } from './data/data.tsx'
import { story } from './data/data.tsx'

const Hero = React.lazy(() => import('./components/Hero'));
const Sales = React.lazy(() => import('./components/Sales'));
const FlexContent = React.lazy(() => import('./components/FlexContent'));
const Stories = React.lazy(() => import('./components/Stories'));

function App() {

  return (
    <>
      <NavBar />
      <Cart />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Hero heroapi={heroapi} />
          <Sales endpoint={popularsales} ifExists />
          <FlexContent endpoint={highlight} ifExists />
          <Sales endpoint={toprateslaes} />
          <FlexContent endpoint={sneaker} />
          <Stories story={story} />
        </Suspense>
      </main>
    </>
  )
}

export default App
