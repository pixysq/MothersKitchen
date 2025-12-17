// App.jsx
import { useState, useEffect, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Modal from './components/Model/Model'
import WhatsAppButton from './components/Home/Whatsapp'

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Team = lazy(() => import('./pages/Team'))
const Comic = lazy(() => import('./pages/Comic'))
const MkCafe = lazy(() => import('./pages/MkCafe'))
const Contact = lazy(() => import('./pages/Contact'))
const Recipes = lazy(() => import('./pages/Recipes'))
const Pledge = lazy(() => import('./pages/Pledge'))
const Awards = lazy(() => import('./pages/Awards'))
const Beauty = lazy(() => import('./components/Beauty/beauty'))
const Living = lazy(() => import('./components/Living/living'))
const Daksh = lazy(() => import('./pages/Daksh'))
const Ambassador = lazy(() => import('./pages/Ambassador'))
const Blogs = lazy(() => import('./pages/Blogs'))
const Packaging = lazy(() => import('./pages/Packaging'))
const Store = lazy(() => import('./pages/Store'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Brands = lazy(() => import('./pages/Brands'))



// Blogs
const Blog1 = lazy(() => import('./components/Blogs/Blog1'))
const Blog2 = lazy(() => import('./components/Blogs/Blog2'))
const Blog3 = lazy(() => import('./components/Blogs/Blog3'))
const Blog4 = lazy(() => import('./components/Blogs/Blog4'))
const Blog5 = lazy(() => import('./components/Blogs/Blog5'))
const Blog6 = lazy(() => import('./components/Blogs/Blog6'))
const Blog7 = lazy(() => import('./components/Blogs/Blog7'))
const Blog8 = lazy(() => import('./components/Blogs/Blog8'))

const App = () => {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Navbar />
      <WhatsAppButton />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="mk" element={<Home />} />
          <Route path="/" element={<Brands />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/comic" element={<Comic />} />
          <Route path="/cafe" element={<MkCafe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/pledge" element={<Pledge />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/living" element={<Living />} />
          <Route path="/daksh" element={<Daksh />} />
          <Route path="/ambassador" element={<Ambassador />} />
          <Route path="/blogs" element={<Blogs />} />

          <Route path="/blog1" element={<Blog1 />} />
          <Route path="/blog2" element={<Blog2 />} />
          <Route path="/blog3" element={<Blog3 />} />
          <Route path="/blog4" element={<Blog4 />} />
          <Route path="/blog5" element={<Blog5 />} />
          <Route path="/blog6" element={<Blog6 />} />
          <Route path="/blog7" element={<Blog7 />} />
          <Route path="/blog8" element={<Blog8 />} />

          <Route path="/packaging" element={<Packaging />} />
          <Route path="/store" element={<Store />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  )
}

export default App
