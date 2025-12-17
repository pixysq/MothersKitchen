import React from 'react'
import BlogHeadCard from './BlogHeadCard'
import headBlog2 from '../../assets/blogs/headBlog2.png'
import LastSection from '../LastSection'
function Blog2() {
  return (
    <div>
      <BlogHeadCard
        imageSrc={headBlog2}
        heading="From Ashes to Nourishment: The Mother's Kitchen Story"
        date="January 20, 2025"
      />

      {/* content */}
      <div className="p-10 font-lexend font-medium leading-tight text-[#000000] md:mt-5 md:pl-20 md:pr-20">
        <p>
          In 2018, Shivani Malik faced a devastating setback—a fire that reduced her previous venture to ashes. With
          over 25 years in the industry, she could have walked away. Instead, she saw an opportunity to rebuild, not
          just for herself but for countless mothers with culinary talents waiting to be discovered.
        </p>

        <p className="mb-5 mt-5">The Birth of Mother's Kitchen</p>

        <p>
          Out of the literal ashes, Mother's Kitchen was born. Shivani envisioned a brand that would do more than sell
          products; it would become a community. A place where traditional recipes meet modern convenience, without
          compromising health or sustainability.
        </p>

        <p className="mb-5 mt-5">Empowering Mothers Everywhere</p>

        <p>
          But Shivani's vision didn't stop at creating healthy, ready-to-eat meals. She aimed to empower other mothers
          to transform their kitchen skills into thriving businesses. Mother's Kitchen became a platform for these
          women, turning home-cooked magic into success stories.
        </p>

        <p className="mb-5 mt-5">A Commitment to Quality and Sustainability</p>

        <p>
          Every product from Mother's Kitchen is a testament to this journey. From sourcing real ingredients to
          upholding traditional recipes, the brand ensures that convenience doesn't mean compromise. Sustainability is
          at the core of their operations, reflecting a commitment to the planet as strong as their commitment to
          health.
        </p>

        <p className="mb-5 mt-5">Join the Movement</p>

        <p>
          Mother's Kitchen isn't just about food; it's about resilience, community, and redefining what's possible. It's
          proof that from the darkest moments, something nourishing and empowering can emerge.
        </p>

        <p className="mb-5 mt-5">
          So, the next time you think packaged food can't be healthy or meaningful, remember Mother's Kitchen.
        </p>

        <p>**Think resilience. Think community. Think Mother's Kitchen.**</p>
      </div>

      <LastSection />
    </div>
  )
}

export default Blog2
