import { Route, Routes, useLocation } from 'react-router-dom'
import {
  About,
  Brands,
  Comic,
  Contact,
  Home,
  MkCafe,
  NotFound,
  Team,
  Recipes,
  Awards,
  Pledge,
  Beauty,
  Living,
  Daksh,
} from './pages'
import { Footer, Loader, Navbar } from './components'
import { Suspense } from 'react'

const App = () => {
  const location = useLocation()

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/comic" element={<Comic />} />
          <Route path="/cafe" element={<MkCafe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/pledge" element={<Pledge />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/living" element={<Living />} />
          <Route path="/daksh" element={<Daksh />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  )
}

export default App
