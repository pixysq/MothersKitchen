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
  Ambassador,
  Blogs,
  Packaging,
  Store,
} from './pages'
import Blog1 from './components/Blogs/Blog1'
import Blog2 from './components/Blogs/Blog2'
import Blog3 from './components/Blogs/Blog3'
import Blog4 from './components/Blogs/Blog4'
import Blog5 from './components/Blogs/Blog5'
import Blog6 from './components/Blogs/Blog6'
import Blog7 from './components/Blogs/Blog7'
import Blog8 from './components/Blogs/Blog8'
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
        <Footer />
      </Suspense>
    </>
  )
}

export default App
