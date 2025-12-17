import React from 'react'
import headBlog1 from '../../assets/blogs/headBlog1.png'
import LastSection from '../LastSection'

import BlogHeadCard from './BlogHeadCard'
function Blog1() {
  return (
    <div>
      <BlogHeadCard
        imageSrc={headBlog1}
        date="January 18, 2025"
        heading="Packaged Food Is Broken. Mother’s Kitchen Is Fixing It."
      />

      {/* content */}
      <div className="p-10 font-lexend font-medium leading-tight text-[#000000] md:mt-5 md:pl-60 md:pr-40">
        <p className="mb-5">Packaged Food Is Broken. Mother’s Kitchen Is Fixing It.</p>

        <p>Let’s be honest.</p>

        <p className="mb-5 mt-5">Most packaged food is a trade-off.</p>

        <p>
          You either get convenience or health.
          <br />
          You either get long shelf life or real ingredients.
          <br />
          You either get speed or taste that actually feels homemade.
          <br />
        </p>

        <p className="mt-5">And somehow, we’ve been convinced that this is just how it has to be.</p>

        <p className="mt-5">
          That real food—the kind made with care, tradition, and actual ingredients—doesn’t belong in a packet.
        </p>

        <p className='mt-5 mb-5' >Mother’s Kitchen by Shivani disagrees.</p>

        <p >They’re rewriting the rules of packaged food.</p>


        {/* image-1 */}

        <p>✅hello</p>
      </div>

      <LastSection />
    </div>
  )
}

export default Blog1
